'use strict';

module.exports = (title, {movieRepository}) => {
    return movieRepository.getByTitle(title);
};