'use strict';

module.exports = (movie, {movieRepository}) => {
    return movieRepository.merge(movie);
};