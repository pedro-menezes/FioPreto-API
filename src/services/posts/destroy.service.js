const { StatusCodes } = require('http-status-codes');

const { postsRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.destroy = async (id) => {
  const post = await postsRepository.getById(id);
  if (!post) {
    throw new ApplicationError(messages.notFound('post'), StatusCodes.NOT_FOUND);
  }

  return postsRepository.destroy(id);
};
