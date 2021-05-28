const { salonsRepository } = require('../../repositories');
const { queryHelper } = require('../../helpers');

module.exports.list = async (options) => {
  let query = queryHelper(options);
  query = Object.assign(query, options.params);
  const resposta = await salonsRepository.list(query);
  const { count, rows } = resposta;
  const totalPages = Math.ceil(count / options.perPage);

  return {
    metadata: {
      resposta: resposta,
      total: count,
      totalPages,
      ...(options.page > 1 && { previousPage: options.page - 1 }),
      ...(options.page < count && options.page < totalPages && { nextPage: options.page + 1 }),
    },
    data: rows,
  };
};
