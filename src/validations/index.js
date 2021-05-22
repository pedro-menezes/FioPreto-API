const { users } = require('./users.validation');
const { auth } = require('./auth.validation');
const { salon } = require('./salon.validation');

module.exports.validationSchemas = {
  users,
  auth,
  salon,
};
