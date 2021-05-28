const { addressesRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.listCity = async (options) => {
  let query = queryHelper(options);
  query = Object.assign(query, options.params);
  const { count, rows } = await addressesRepository.list(query);
  const totalPages = Math.ceil(count / options.perPage);

  return {
    metadata: {
      total: count,
      totalPages,
      ...(options.page > 1 && { previousPage: options.page - 1 }),
      ...(options.page < count && options.page < totalPages && { nextPage: options.page + 1 }),
    },
    data: rows,
  };
};
