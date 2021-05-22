const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { messages } = require('../helpers');
const { usersRepository } = require('../repositories');

module.exports = catchAsync(async (req, res, next) => {
  const user = await usersRepository.getById(req.session.id);

  if (!user.isHairdresser) {
    throw new ApplicationError(messages.notHairdresser, StatusCodes.UNAUTHORIZED);
  }

  next();
});
