const { user } = require('./user.validation');
const { auth } = require('./auth.validation');
const { salon } = require('./salon.validation');
const { post } = require('./post.validation');

module.exports.validationSchemas = {
  user,
  auth,
  salon,
  post,
};
