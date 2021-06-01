const { salonsRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.listByUser = async (options) => {
  var query = queryHelper(options);
  query = Object.assign(query, options.params);
  const { count, rows } = await salonsRepository.list(query);
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
