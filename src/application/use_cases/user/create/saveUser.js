'use strict';

module.exports = (user, {userRepository} ) => {
    return userRepository.persist(user);
};