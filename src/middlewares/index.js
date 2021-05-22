const { errorTracker, errorHandler } = require('./error');
const isAuthorized = require('./isAuthorized');
const isHairdresser = require('./isHairdresser');
const validate = require('./validate');

module.exports = {
  errorTracker,
  errorHandler,
  isAuthorized,
  isHairdresser,
  validate,
};
