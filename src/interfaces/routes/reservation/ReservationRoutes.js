'use strict';
const ReservationController = require('../../controllers/reservation/ReserationController');

module.exports = {
    name: 'reservation',
    version: '1.0.0',
    register: async (server) => {

        server.route([
            {
                method: 'GET',
                path: '/reservation/findAll',
                handler: ReservationController.findAll,
                options: {
                    description: 'List all reservation',
                    tags: ['api'],
                },
            },
            {
                method: 'POST',
                path: '/reservation/save',
                handler: ReservationController.saveReservation,
                options: {
                    description: 'Create a reservation',
                    tags: ['api'],
                },
            },
            {
                method: 'PUT',
                path: '/reservation/update',
                handler: ReservationController.updateReservation,
                options: {
                    description: 'Create a reservation',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/reservation/getReservationById/{id}',
                handler: ReservationController.getReservationById,
                options: {
                    description: 'Get a reservation by its {id}',
                    tags: ['api'],
                },
            },
            {
                method: 'GET',
                path: '/reservation/getReservationByDate/{date}',
                handler: ReservationController.getReservationByDate,
                options: {
                    description: 'get a reservation by date',
                    tags: ['api'],
                },
            },
        ]);
    }
};