const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { salonService, imagesService, addressService } = require('../services');
const { messages } = require('../helpers');
const { Address } = require('../models');
const { Sequelize } = require('sequelize');

module.exports = {
  list: catchAsync(async (req, res) => {
    const { page, perPage, sortBy } = req.query;
    const include = { model: Address, as: 'addresses' };
    const response = await salonService.list({ page, perPage, sortBy, include });

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

  listCity: catchAsync(async (req, res) => {
    const params = {
      attributes: [[Sequelize.fn('DISTINCT', Sequelize.col('city')), 'city'], 'ibge'],
    };

    const response = await addressService.listCity({ params });

    if (!response || response.data.length === 0) {
      return res.status(StatusCodes.NO_CONTENT).end();
    }

    return res.status(StatusCodes.OK).json(response);
  }),

  get: catchAsync(async (req, res) => {
    const { id } = req.params;
    const params = { where: { id: id }, include: { model: Address, as: 'addresses' } };
    const response = await salonService.get(params);
    return res.status(StatusCodes.OK).json(response);
  }),

  listByCity: catchAsync(async (req, res) => {
    const { ibge } = req.params;
    const { page, perPage, sortBy } = req.query;
    const include = { where: { ibge: ibge }, attributes: [], model: Address, as: 'addresses' };
    const response = await salonService.list({ page, perPage, sortBy, include });

    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;

    const response = {};
    response.salon = await salonService.create(body.salon);

    body.address.salon_id = response.salon.id;
    response.address = await addressService.create(body.address);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: catchAsync(async (req, res) => {
    const {
      params: { id },
      body,
    } = req;

    const salon = await salonService.getById(id);

    if (salon.user_id != req.session.id) {
      throw new ApplicationError(messages.notOwner, StatusCodes.UNAUTHORIZED);
    }

    const address = await addressService.getBySalon(id);
    console.log(address);
    await addressService.update(address.id, body.address);

    const response = await salonService.update(id, body.salon);
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

    const address = await addressService.getBySalon(id);
    await addressService.destroy(address.id);

    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
