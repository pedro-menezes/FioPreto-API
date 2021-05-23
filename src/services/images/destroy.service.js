const { imagesRepository } = require('../../repositories');

module.exports.destroy = async (id) => {
  return imagesRepository.destroy(id);
};
