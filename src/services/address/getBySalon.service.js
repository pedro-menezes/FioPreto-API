const { StatusCodes } = require('http-status-codes');

const { addressesRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.getBySalon = async (salon_id) => {
  const address = await addressesRepository.get({ where: { salon_id: salon_id } });
  if (!address) {
    throw new ApplicationError(messages.notFound('address'), StatusCodes.NOT_FOUND);
  }

  return address;
};
