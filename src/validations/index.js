const { user } = require('./user.validation');
const { auth } = require('./auth.validation');
const { salon } = require('./salon.validation');
const { post } = require('./post.validation');
const { image } = require('./image.validation');
const { scheduling } = require('./scheduling.validation');

module.exports.validationSchemas = {
  user,
  auth,
  salon,
  post,
  image,
  scheduling,
};
