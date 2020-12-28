'use strict';
const movieController = require('../../controllers/movie/MovieController');

module.exports = {
    name: 'movie',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/movie/findAll',
                handler: movieController.getAllMovie,
                options: {
                    description: 'List all movies',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/movie/save',
                handler: movieController.saveMovie,
                options: {
                    description: 'Create a movie',
                    tags: ['api'],
                },
            },
            {
                method: 'PUT',
                path: '/movie/update',
                handler: movieController.updateMovie,
                options: {
                    description: 'Update a movie',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/movie/getMovieById/{id}',
                handler: movieController.getMovieById,
                options: {
                    description: 'Get a movie by its {id}',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/movie/getMovieByTitle/{title}',
                handler: movieController.getMovieByTitle,
                options: {
                    description: 'Get a movie by title',
                    tags: ['api'],
                },
            },
        ]);
    }
};