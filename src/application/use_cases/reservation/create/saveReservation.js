'use strict';

module.exports = (toSave, {reservationRepository}) => {
    return reservationRepository.persist(toSave);
};