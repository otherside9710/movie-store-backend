'use strict';

module.exports = (userEmail, userRepository) => {
    return userRepository.getByEmail(userEmail);
};