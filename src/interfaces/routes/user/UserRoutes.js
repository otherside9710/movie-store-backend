'use strict';

const UsersController = require('../../controllers/user/UserController');

module.exports = {
    name: 'users',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/user/findAll',
                handler: UsersController.findAll,
                options: {
                    description: 'List all users',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/user/save',
                handler: UsersController.saveUser,
                options: {
                    description: 'Create a user',
                    tags: ['api'],
                },
            },
            {
                method: 'PUT',
                path: '/user/update',
                handler: UsersController.updateUser,
                options: {
                    description: 'Update a user',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/user/getUserById/{id}',
                handler: UsersController.getUserById,
                options: {
                    description: 'Get a user by its {id}',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/user/getUserByEmail/{email}',
                handler: UsersController.getUserByEmail,
                options: {
                    description: 'Get a user by email',
                    tags: ['api'],
                },
            },
        ]);
    }
};