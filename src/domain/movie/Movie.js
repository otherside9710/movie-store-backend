'use strict';

module.exports = class {

    constructor(id = null, title, generalDescription, actorList = [], directors = [],
                quantity = 0, price = 0, created_at, updated_at) {
        this.id = id;
        this.title = title;
        this.generalDescription = generalDescription;
        this.actorList = actorList;
        this.directors = directors;
        this.quantity = quantity;
        this.price = price;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

};