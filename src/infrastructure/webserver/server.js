'use strict';

const Hapi = require('@hapi/hapi');
const Good = require('@hapi/good');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const Blipp = require('blipp');
const HapiSwagger = require('hapi-swagger');
const Package = require('../../../package');

const createServer = async () => {

    // Create a server with a host and port
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        routes: {
            cors: true
        }
    });

    // Register vendors plugins
    await server.register([
        Blipp,
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: {
                info: {
                    title: 'Test API Documentation',
                    version: Package.version,
                },
            }
        },
        {
            plugin: Good,
            options: {
                ops: {
                    interval: 1000 * 60
                },
                reporters: {
                    myConsoleReporter: [
                        {
                            module: '@hapi/good-squeeze',
                            name: 'Squeeze',
                            args: [{ops: '*', log: '*', error: '*', response: '*'}]
                        },
                        {
                            module: '@hapi/good-console'
                        },
                        'stdout'
                    ]
                }
            },
        },
    ]);

    const plugin = [
        require('./oauth'),
        require('../../interfaces/routes/movies/MovieRoutes'),
        require('../../interfaces/routes/reservation/ReservationRoutes'),
        require('../../interfaces/routes/user/UserRoutes'),
    ];

    const options = {
        routes: {
            prefix: '/api'
        }
    };

    await server.register(plugin, options);
    server.app.serviceLocator = require('../../infrastructure/config/service-locator');

    return server;
};

module.exports = createServer;