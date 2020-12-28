'use strict';

module.exports = {

    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
    URI_DATABASE: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    SUPPORTED_DATABASE: {
        MONGO: 'mongo'
    },

    RESERVATION_STATE: {
        RESERVED: 'RESERVED',
        PENDING_RESERVATION: 'PENDING_RESERVATION',
        ENDED_RESERVATION: 'ENDED RESERVATION'
    }
};