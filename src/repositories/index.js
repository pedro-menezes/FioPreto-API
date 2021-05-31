const usersRepository = require('./user.repository');
const accessTokenRepository = require('./accessToken.repository');
const salonsRepository = require('./salon.repository');
const postsRepository = require('./post.repository');
const imagesRepository = require('./image.repository');
const addressesRepository = require('./address.repository');
const schedulingRepository = require('./scheduling.repository');

module.exports = {
  usersRepository,
  accessTokenRepository,
  salonsRepository,
  postsRepository,
  imagesRepository,
  addressesRepository,
  schedulingRepository,
};
