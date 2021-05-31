const usersService = require('./users');
const authService = require('./auth');
const accessTokenService = require('./accessToken');
const salonService = require('./salons');
const postsService = require('./posts');
const imagesService = require('./images');
const addressService = require('./address');
const schedulingService = require('./scheduling');

module.exports = {
  usersService,
  authService,
  accessTokenService,
  salonService,
  postsService,
  imagesService,
  addressService,
  schedulingService,
};
