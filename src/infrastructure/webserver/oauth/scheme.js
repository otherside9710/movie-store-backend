'use strict';

const AuthorizationController = require('../../../interfaces/controllers/security/AuthorizationController');

module.exports = () => {
  return {
    authenticate: AuthorizationController.verifyAccessToken
  };
};