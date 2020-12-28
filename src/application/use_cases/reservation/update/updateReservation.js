'use strict';

module.exports = (tosave, {reservationRepository}) => {
    return reservationRepository.merge(tosave);
};