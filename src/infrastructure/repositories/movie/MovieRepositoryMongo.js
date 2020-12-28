'use strict';

const Movie = require('../../../domain/movie/Movie');
const MongooseMovie = require('../../orm/mongoose/schemas/movie/Movie');
const MovieRepository = require('../../../domain/movie/MovieRepository');
const {getDateNow} = require('../../shared/utils/index');

module.exports = class extends MovieRepository {

    constructor() {
        super();
    }

    async persist(userEntity) {
        const created_at = getDateNow();
        const {title, generalDescription, actorList, directors, quantity, price} = userEntity;
        const mongooseMovie = await new MongooseMovie({
            title, generalDescription, actorList, directors, quantity, price, created_at
        });
        await mongooseMovie.save();
        return new Movie(mongooseMovie.id, mongooseMovie.title, mongooseMovie.generalDescription, mongooseMovie.actorList,
            mongooseMovie.directors, mongooseMovie.quantity, mongooseMovie.price, mongooseMovie.created_at);
    }

    async merge(userEntity) {
        const updated_at = getDateNow();
        const {id, title, generalDescription, actorList, directors, quantity, price} = userEntity;
        const mongooseMovie = await MongooseMovie.findByIdAndUpdate(id, {
            title, generalDescription, actorList, directors,
            quantity, price, updated_at
        });
        return new Movie(mongooseMovie.id, mongooseMovie.title, mongooseMovie.generalDescription, mongooseMovie.actorList,
            mongooseMovie.directors, mongooseMovie.quantity, mongooseMovie.price, mongooseMovie.created_at, mongooseMovie.updated_at);
    }

    async get(movieId) {
        const mongooseMovie = await MongooseMovie.findOne({'_id': movieId});
        return new Movie(mongooseMovie.id, mongooseMovie.title, mongooseMovie.generalDescription, mongooseMovie.actorList,
            mongooseMovie.directors, mongooseMovie.quantity, mongooseMovie.price, mongooseMovie.created_at, mongooseMovie.updated_at);
    }

    async getByTitle(title) {
        const mongooseMovie = await MongooseMovie.find({title: title});
        return new Movie(mongooseMovie.id, mongooseMovie.title, mongooseMovie.generalDescription, mongooseMovie.actorList,
            mongooseMovie.directors, mongooseMovie.quantity, mongooseMovie.price, mongooseMovie.created_at, mongooseMovie.updated_at);
    }

    async find() {
        const mongooseMovies = await MongooseMovie.find();
        return mongooseMovies.map((mongooseMovie) => {
            return new Movie(mongooseMovie.id, mongooseMovie.title, mongooseMovie.generalDescription, mongooseMovie.actorList,
                mongooseMovie.directors, mongooseMovie.quantity, mongooseMovie.price, mongooseMovie.created_at, mongooseMovie.updated_at);
        });
    }

};