const { StatusCodes } = require('http-status-codes');

const { salonsRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.create = async (params) => {
  const salonExists = await salonsRepository.get({ where: { cnpj: params.cnpj } });
  console.log(salonExists);
  if (salonExists) {
    throw new ApplicationError(messages.alreadyExists('cnpj'), StatusCodes.CONFLICT);
  }

  return salonsRepository.create(params);
};
