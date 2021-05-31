const { user } = require('./user.routes');
const { auth } = require('./auth.routes');
const { salon } = require('./salon.routes');
const { post } = require('./post.routes');
const { image } = require('./image.routes');
const { scheduling } = require('./scheduling.routes');

module.exports = {
  user,
  auth,
  salon,
  post,
  image,
  scheduling,
};
