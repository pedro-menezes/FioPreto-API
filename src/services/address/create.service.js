const { addressesRepository } = require('../../repositories');

module.exports.create = async (params) => {
  return addressesRepository.create(params);
};
