'use strict';
const moment = require('moment');

const getDateNow = function () {
    return moment().format('YYYY-MM-DD');
};

module.exports = {
    getDateNow
};