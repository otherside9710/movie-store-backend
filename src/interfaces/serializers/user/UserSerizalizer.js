'use strict';

const _serializeSingleUser = (user) => {
    return {
        'id': user.id,
        'first-name': user.firstName,
        'last-name': user.lastName,
        'email': user.email,
        'rut': user.rut,
        'phone': user.phone,
        'role': user.role,
        'created_at': user.created_at,
        'updated_at': user.updated_at
    };
};

module.exports = class {

    serialize(data) {
        if (!data) {
            throw new Error('Expect data to be not undefined nor null');
        }
        if (Array.isArray(data)) {
            return data.map(_serializeSingleUser);
        }
        return _serializeSingleUser(data);
    }

};