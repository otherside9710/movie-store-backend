'use strict';

module.exports = (user, userRepository) => {
    return userRepository.merge(user);
};