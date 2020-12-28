'use strict';

module.exports = (movieId, {movieRepository}) => {
    return movieRepository.get(movieId);
};