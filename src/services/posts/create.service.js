const { postsRepository } = require('../../repositories');

module.exports.create = async (params) => {
  return postsRepository.create(params);
};
