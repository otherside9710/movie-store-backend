'use strict';

module.exports = (reservationId, {reservationRepository}) => {
    return reservationRepository.get(reservationId);
};