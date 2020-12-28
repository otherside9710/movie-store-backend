'use strict';

const User = require('../../../domain/user/User');
const MongooseUser = require('../../orm/mongoose/schemas/user/User');
const UserRepository = require('../../../domain/user/UserRepository');
const {getDateNow} = require('../../shared/utils/index');

module.exports = class extends UserRepository {

    constructor() {
        super();
    }

    async persist(userEntity) {
        const created_at = getDateNow();
        const {firstName, lastName, email, rut, phone, role, password} = userEntity;
        const mongooseUser = await new MongooseUser({firstName, lastName, email, rut, phone, role, created_at, password});
        await mongooseUser.save();
        return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email,
            mongooseUser.rut, mongooseUser.phone, mongooseUser.role, mongooseUser.created_at);
    }

    async merge(userEntity) {
        const {id, firstName, lastName, email, rut, phone} = userEntity;
        const mongooseUser = await MongooseUser.findByIdAndUpdate(id, {firstName, lastName, email, rut, phone}, {
            new: true,
            runValidators: true
        });
        return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email,
            mongooseUser.rut, mongooseUser.phone, mongooseUser.role, mongooseUser.created_at, mongooseUser.updated_at);
    }

    async get(userId) {
        const mongooseUser = await MongooseUser.findOne({_id: userId});
        return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email,
            mongooseUser.rut, mongooseUser.phone, mongooseUser.role, mongooseUser.created_at);
    }

    async getByEmail(userEmail) {
        const mongooseUser = await MongooseUser.findOne({email: userEmail});
        return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email,
        mongooseUser.rut, mongooseUser.phone, mongooseUser.password, mongooseUser.role, mongooseUser.created_at);
    }

    async find() {
        const mongooseUsers = await MongooseUser.find();
        return mongooseUsers.map((mongooseUser) => {
            return new User(mongooseUser.id, mongooseUser.firstName, mongooseUser.lastName, mongooseUser.email,
                mongooseUser.rut, mongooseUser.phone, mongooseUser.role, mongooseUser.created_at);
        });
    }

};