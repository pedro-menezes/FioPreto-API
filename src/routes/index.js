const { users } = require('./users.routes');
const { auth } = require('./auth.routes');
const { salon } = require('./salon.routes');

module.exports = {
  users,
  auth,
  salon,
};
