const GetMovieById = require('../../../application/use_cases/movie/search/getMovieById');
const GetAllMovie = require('../../../application/use_cases/movie/search/getAllMovies');
const GetMovieByTitle = require('../../../application/use_cases/movie/search/getMovieByTitle.js');
const SaveMovie = require('../../../application/use_cases/movie/create/saveMovie');
const UpdateMovie = require('../../../application/use_cases/movie/update/updateMovie');

module.exports = {

    async saveMovie(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const payload = request.payload;

        // Treatment
        const movie = await SaveMovie(payload, serviceLocator);

        // Output
        return serviceLocator.movieSerializer.serialize(movie);
    },

    async updateMovie(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const payload = request.payload;

        // Treatment
        const movie = await UpdateMovie(payload, serviceLocator);

        // Output
        return serviceLocator.movieSerializer.serialize(movie);
    },

    async getAllMovie(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const users = await GetAllMovie(serviceLocator);

        // Output
        return users.map(serviceLocator.movieSerializer.serialize)
    },

    async getMovieById(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const movieId = request.params.id;

        // Treatment
        const user = await GetMovieById(movieId, serviceLocator);

        // Output
        if (!user) {
            return Boom.notFound();
        }
        return serviceLocator.movieSerializer.serialize(user);
    },

    async getMovieByTitle(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const title = request.params.title;

        // Treatment
        const user = await GetMovieByTitle(title, serviceLocator);

        // Output
        if (!user) {
            return Boom.notFound();
        }
        return serviceLocator.movieSerializer.serialize(user);
    },

    async updateReservation(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const payload = request.payload;

        // Treatment
        const user = await UpdateReservation(payload, serviceLocator);

        // Output
        return serviceLocator.movieSerializer.serialize(user);
    },
}