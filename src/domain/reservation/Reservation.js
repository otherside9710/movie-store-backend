'use strict';

module.exports = class {

    constructor(id = null, clientId, movies = [], date, status = [], subtotal, created_at, updated_at) {
        this.id = id;
        this.clientId = clientId;
        this.movies = movies;
        this.date = date;
        this.status = status;
        this.subtotal = subtotal;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

};