'use strict';

const jwt = require('jsonwebtoken');

const AccessTokenManager = require('../../application/security/token/AccessTokenManager');

const JWT_SECRET_KEY = process.env.TOKEN_PRIVATE_KEY;

module.exports = class extends AccessTokenManager {

  generate(payload) {
    return jwt.sign(payload, JWT_SECRET_KEY);
  }

  decode(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET_KEY);
  }

};