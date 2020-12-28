'use strict';

const _serializeSingleMovie = (movie) => {
    return {
        'id' : movie.id,
        'title' : movie.title,
        'generalDescription' : movie.generalDescription,
        'actorList' : movie.actorList,
        'directors' : movie.directors,
        'quantity' : movie.quantity,
        'price': movie.price,
        'created_at': movie.created_at,
        'updated_at': movie.updated_at
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleMovie);
        }
        return _serializeSingleMovie(data);
    }

};