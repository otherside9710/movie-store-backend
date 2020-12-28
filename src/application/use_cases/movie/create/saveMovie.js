'use strict';

module.exports = (movie, {movieRepository}) => {
    return movieRepository.persist(movie);
};