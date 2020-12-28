'use strict';

const Boom = require('@hapi/boom');
const FindAll = require('../../../application/use_cases/user/search/getAllUsers');
const CreateUser = require('../../../application/use_cases/user/create/saveUser');
const UpdateUser = require('../../../application/use_cases/user/update/updateUser');
const GetUser = require('../../../application/use_cases/user/search/getUserById');
const GetUserByEmail = require('../../../application/use_cases/user/search/getUSerByEmail');

module.exports = {

    async saveUser(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const userPayload = request.payload;

        // Treatment
        const user = await CreateUser(userPayload, serviceLocator);

        // Output
        return serviceLocator.userSerializer.serialize(user);
    },

    async findAll(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const users = await FindAll(serviceLocator);

        // Output
        return users.map(serviceLocator.userSerializer.serialize)
    },

    async getUserById(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const userId = request.params.id;

        // Treatment
        const user = await GetUser(userId, serviceLocator);

        // Output
        if (!user) {
            return Boom.notFound();
        }
        return serviceLocator.userSerializer.serialize(user);
    },

    async getUserByEmail(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const email = request.params.email;

        // Treatment
        const user = await GetUserByEmail(email, serviceLocator);

        // Output
        if (!user) {
            return Boom.notFound();
        }
        return serviceLocator.userSerializer.serialize(user);
    },

    async updateUser(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const userPayload = request.payload;

        // Treatment
        const user = await UpdateUser(userPayload, serviceLocator);

        // Output
        return serviceLocator.userSerializer.serialize(user);
    },

};
