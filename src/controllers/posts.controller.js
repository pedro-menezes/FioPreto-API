const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { postsService } = require('../services');
const { messages } = require('../helpers');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await postsService.list({ page, perPage, sortBy });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await postsService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    console.log(req);
    const { body } = req;
    body.user_id = req.session.id;

    const response = await postsService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    const post = await postsService.get(id);

    if (post.user_id != req.session.id) {
      throw new ApplicationError(messages.notOwner, StatusCodes.UNAUTHORIZED);
    }

    const response = await postsService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;

    const post = await postsService.get(id);

    if (post.user_id != req.session.id) {
      throw new ApplicationError(messages.notOwner, StatusCodes.UNAUTHORIZED);
    }

    await postsService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
