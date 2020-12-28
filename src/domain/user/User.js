'use strict';

module.exports = class {

    constructor(id = null, firstName, lastName, email, rut, phone, password = null, role, created_at, updated_at) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.rut = rut;
        this.phone = phone;
        this.password = password;
        this.role = role;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
};