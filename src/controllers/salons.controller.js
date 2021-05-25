const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { salonService, imagesService } = require('../services');
const { messages } = require('../helpers');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const response = await salonService.list({ page, perPage, sortBy });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  listByUser: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const { id } = req.session;
    const response = await salonService.listByUser({ page, perPage, sortBy, id });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const response = await salonService.get(id);
    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    body.user_id = req.session.id;

    const response = await salonService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    const salon = await salonService.get(id);

    if (salon.user_id != req.session.id) {
      throw new ApplicationError(messages.notOwner, StatusCodes.UNAUTHORIZED);
    }

    const response = await salonService.update(id, body);
    return res.status(StatusCodes.OK).json(response);
  }),

  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;

    const salon = await salonService.get(id);

    if (salon.user_id != req.session.id) {
      throw new ApplicationError(messages.notOwner, StatusCodes.UNAUTHORIZED);
    }

    await salonService.destroy(id);

    if (salon.key_img) {
      await imagesService.destroy(salon.key_img);
    }

    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
