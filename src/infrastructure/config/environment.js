'use strict';

const constants = require('./constants');

/**
 * This module centralize all the environment variables of the application. Thanks to this module, there MUST NOT be any
 * `process.env` instruction in any other file or module.
 */
module.exports = (() => {

    const environment = {
        database: {
            dialect: constants.SUPPORTED_DATABASE.MONGO || process.env.DATABASE_DIALECT,
            url: process.env.DATABASE_URI || constants.URI_DATABASE,
        }
    };

    return environment;
})();