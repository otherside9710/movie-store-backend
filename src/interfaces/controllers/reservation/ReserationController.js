const GetReservationById = require('../../../application/use_cases/reservation/search/getReservationById');
const GetReservationByDate = require('../../../application/use_cases/reservation/search/getResevationByDate');
const FindAllReservation = require('../../../application/use_cases/reservation/search/getAllReservation');
const SaveReservation = require('../../../application/use_cases/reservation/create/saveReservation');
const UpdateReservation = require('../../../application/use_cases/reservation/update/updateReservation');

module.exports = {

    async saveReservation(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const reservationPayload = request.payload;

        // Treatment
        const reservation = await SaveReservation(reservationPayload, serviceLocator);

        // Output
        return serviceLocator.reservationSerializer.serialize(reservation);
    },

    async findAll(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Treatment
        const reservation = await FindAllReservation(serviceLocator);

        // Output
        return reservation.map(serviceLocator.reservationSerializer.serialize)
    },

    async getReservationById(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const reservationId = request.params.id;

        // Treatment
        const reservation = await GetReservationById(reservationId, serviceLocator);

        // Output
        if (!reservation) {
            return Boom.notFound();
        }
        return serviceLocator.reservationSerializer.serialize(reservation);
    },

    async getReservationByDate(request) {
        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const date = request.params.date;

        // Treatment
        const reservation = await GetReservationByDate(date, serviceLocator);

        // Output
        if (!reservation) {
            return Boom.notFound();
        }
        return serviceLocator.reservationSerializer.serialize(user);
    },

    async updateReservation(request) {

        // Context
        const serviceLocator = request.server.app.serviceLocator;

        // Input
        const payload = request.payload;

        // Treatment
        const reservation = await UpdateReservation(payload, serviceLocator);

        // Output
        return serviceLocator.reservationSerializer.serialize(reservation);
    },
};
