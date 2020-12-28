'use strict';

const constants = require('./constants');
const environment = require('./environment');
const JwtAccessTokenManager = require('../security/JwtAccessTokenManager');
const UserSerializer = require('../../interfaces/serializers/user/UserSerizalizer');
const MovieSerializer = require('../../interfaces/serializers/movie/MovieSerializer');
const ReservationSerializer = require('../../interfaces/serializers/reservation/ReservationSerializer');

function buildBeans() {

    const beans = {
        accessTokenManager: new JwtAccessTokenManager(),
        userSerializer: new UserSerializer(),
        movieSerializer: new MovieSerializer(),
        reservationSerializer: new ReservationSerializer(),
    };

    if (environment.database.dialect === constants.SUPPORTED_DATABASE.MONGO) {
        const UserRepositoryMongo = require('../../infrastructure/repositories/User/UserRepositoryMongo');
        beans.userRepository = new UserRepositoryMongo();

        const MovieRepositoryMongo = require('../../infrastructure/repositories/movie/MovieRepositoryMongo');
        beans.movieRepository = new MovieRepositoryMongo();

        const ReservationRepositoryMongo = require('../../infrastructure/repositories/reservation/ReservationRepositoryMongo');
        beans.reservationRepository = new ReservationRepositoryMongo();

    }

    return beans;
}

module.exports = buildBeans();
