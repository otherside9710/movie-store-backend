'use strict';

module.exports = class {

    persist(domainReservation) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    merge(domainReservation) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    get(reservationId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    getByDate(date) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    find() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

};