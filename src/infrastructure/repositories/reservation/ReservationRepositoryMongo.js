'use strict';

const Reservation = require('../../../domain/reservation/Reservation');
const MongooseReservation = require('../../orm/mongoose/schemas/reservation/Reservation');
const ReservationRepository = require('../../../domain/reservation/ReservationRepository');
const {getDateNow} = require('../../shared/utils/index');

module.exports = class extends ReservationRepository {

    constructor() {
        super();
    }

    async persist(reservationEntity) {
        const created_at = getDateNow();
        const date = created_at;
        const { clientId, movies, status, subtotal } = reservationEntity;
        const mongooseReservation = await new MongooseReservation({ clientId, movies, date, status, subtotal, created_at});
        await mongooseReservation.save();
        return new Reservation(mongooseReservation.id, mongooseReservation.clientId, mongooseReservation.movies,
            mongooseReservation.date, mongooseReservation.status, mongooseReservation.subtotal, mongooseReservation.deliveryDate, mongooseReservation.created_at, mongooseReservation.updated_at);
    }

    async merge(reservationEntity) {
        const updated_at = getDateNow();
        const { id, clientId, movies, date, status , subtotal, deliveryDate} = reservationEntity;
        const mongooseReservation = await MongooseReservation.findByIdAndUpdate(id, {
            id, clientId, movies, date, status, subtotal, deliveryDate, updated_at
        });
        return new Reservation(mongooseReservation.id, mongooseReservation.clientId, mongooseReservation.movies,
            mongooseReservation.date, mongooseReservation.status, mongooseReservation.subtotal,mongooseReservation.deliveryDate, mongooseReservation.created_at, mongooseReservation.updated_at);
    }

    async get(reservationId) {
        const mongooseReservation = await MongooseReservation.findOne({_id:reservationId});
        console.log(mongooseReservation);
        return new Reservation(mongooseReservation.id, mongooseReservation.clientId, mongooseReservation.movies,
            mongooseReservation.date, mongooseReservation.status, mongooseReservation.subtotal,mongooseReservation.deliveryDate, mongooseReservation.created_at, mongooseReservation.updated_at);
    }

    async getByDate(date) {
        const mongooseReservation = await MongooseReservation.find({ date: date });
        return new Reservation(mongooseReservation.id, mongooseReservation.clientId, mongooseReservation.movies,
            mongooseReservation.date, mongooseReservation.status, mongooseReservation.subtotal, mongooseReservation.deliveryDate, mongooseReservation.created_at, mongooseReservation.updated_at);
    }

    async find() {
        const mongooseReservations = await MongooseReservation.find()
        return mongooseReservations.map((reservation) => {
            return new Reservation(reservation._id, reservation.clientId, reservation.movies,
                reservation.date, reservation.status, reservation.subtotal,reservation.deliveryDate, reservation.created_at, reservation.updated_at);
        });
    }

};