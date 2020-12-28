'use strict';

const Boom = require('@hapi/boom');
const GetAccessToken = require('../../../application/use_cases/token/get/GetAccessToken');
const VerifyAccessToken = require('../../../application/use_cases/token/verify/VerifyAccessToken');

module.exports = {

    async getAccessToken(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        if (!request.payload) {
            return Boom.badRequest('Payload is empty');
        }
        const grantType = request.payload['grant_type'];
        const email = request.payload['username'];
        const password = request.payload['password'];

        if (!grantType || grantType !== 'password') {
            return Boom.badRequest('Invalid authentication strategy');
        }

        // Treatment
        try {
            // Output
            return await GetAccessToken(email, password, serviceLocator);
        } catch (err) {
            return Boom.unauthorized('Bad credentials');
        }
    },

    verifyAccessToken(request, h) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const authorizationHeader = request.headers.authorization;
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            throw Boom.badRequest('Missing or wrong Authorization request header', 'oauth');
        }
        const accessToken = authorizationHeader.replace(/Bearer/gi, '').replace(/ /g, '');

        // Treatment
        try {
            const {uid} = VerifyAccessToken(accessToken, serviceLocator);
            if (uid){
              // Output
              return h.response({
                message: 'the token is valid!',
                code: 200
              }).code(200);
            }
        } catch (err) {
          console.log(err);
            return Boom.unauthorized('Bad credentials');
        }
    },

};