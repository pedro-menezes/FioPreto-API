const { salonsRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.listByUser = async (options) => {
  const query = queryHelper(options);
  query.where = { user_id: options.id };
  const { count, rows } = await salonsRepository.listByUser(query);
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
