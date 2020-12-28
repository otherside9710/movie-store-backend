'use strict';

const _serializeSingleReservation = (reservation) => {
    return {
        'id': reservation.id,
        'clientId': reservation.clientId,
        'movies': reservation.movies,
        'date': reservation.date,
        'status': reservation.status,
        'subtotal': reservation.subtotal,
        'deliveryDate': reservation.deliveryDate,
        'created_at': reservation.created_at,
        'updated_at': reservation.updated_at
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleReservation);
        }
        return _serializeSingleReservation(data);
    }

};