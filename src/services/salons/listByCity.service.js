const { salonsRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.listByCity = async (options) => {
  let query = queryHelper(options);
  query.where = options.where;
  query = Object.assign(query, options);
  const resposta = await salonsRepository.list(query);
  const { count, rows } = resposta;
  console.log(query);
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
