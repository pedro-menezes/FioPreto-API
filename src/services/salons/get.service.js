const { StatusCodes } = require('http-status-codes');

const { salonsRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.get = async (id) => {
  const salon = await salonsRepository.getById(id);
  if (!salon) {
    throw new ApplicationError(messages.notFound('salon'), StatusCodes.NOT_FOUND);
  }

  return salon;
};
