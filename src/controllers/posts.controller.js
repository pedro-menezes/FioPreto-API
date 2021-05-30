const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { postsService, imagesService } = require('../services');
const { User } = require('../models');
const { messages } = require('../helpers');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const params = { include: { model: User, as: 'posts' } };

    const response = await postsService.list({ page, perPage, sortBy, params });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  listTips: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const params = {
      attributes: ['img', 'text'],
      where: { type_id: 1 },
      include: { attributes: ['name'], model: User, as: 'posts' },
    };

    const response = await postsService.list({ page, perPage, sortBy, params });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  listFeed: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const params = {
      attributes: ['img'],
      where: { type_id: 2 },
      include: { attributes: ['name'], model: User, as: 'posts' },
    };
    const response = await postsService.list({ page, perPage, sortBy, params });

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

  createFeed: catchAsync(async (req, res) => {
    const { location: url = '', key } = req.file;
    const { body } = req;
    body.img = url;
    body.type_id = 2;
    body.key = key;
    body.user_id = req.session.id;

    const response = await postsService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  createTips: catchAsync(async (req, res) => {
    const { location: url = '', key } = req.file;
    console.log(req);
    const { body } = req;
    body.img = url;
    body.type_id = 1;
    body.key = key;
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

    if (post.key_img) {
      await imagesService.destroy(post.key_img);
    }

    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
