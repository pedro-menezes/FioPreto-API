const { StatusCodes } = require('http-status-codes');

const { postsRepository } = require('../../repositories');
const { ApplicationError } = require('../../utils');
const { messages } = require('../../helpers');

module.exports.update = async (id, body) => {
  const post = await postsRepository.getById(id);
  if (!post) {
    throw new ApplicationError(messages.notFound('post'), StatusCodes.NOT_FOUND);
  }

  Object.assign(post, body);

  return postsRepository.update(post);
};
