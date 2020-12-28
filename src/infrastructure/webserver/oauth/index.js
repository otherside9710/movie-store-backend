'use strict';

const AuthorizationController = require('../../../interfaces/controllers/security/AuthorizationController');

module.exports = {
    name: 'oauth',
    version: '1.0.0',
    register: (server) => {

        server.auth.scheme('oauth', require('./scheme'));

        server.auth.strategy('oauth-jwt', 'oauth');

        server.route([
            {
                method: 'POST',
                path: '/oauth/token',
                handler: AuthorizationController.getAccessToken,
                options: {
                    description: 'Return an OAuth 2 access token',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/oauth/verify',
                handler: AuthorizationController.verifyAccessToken,
                options: {
                    description: 'Verify a OAuth 2 access token',
                    tags: ['api'],
                },
            }
        ]);
    }
};
