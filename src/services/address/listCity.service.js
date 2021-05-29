const { addressesRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.listCity = async (options) => {
  const { count, rows } = await addressesRepository.list(options.params);

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
