'use strict';

module.exports = (dateReservation, {reservationRepository}) => {
    return reservationRepository.getReservationByDate(dateReservation);
};