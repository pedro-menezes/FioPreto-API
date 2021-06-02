const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { schedulingService, salonService } = require('../services');
const { User } = require('../models');
const { messages } = require('../helpers');

module.exports = {
  get: '',

  list: catchAsync(async (req, res) => {
    const { date } = req.params;

    const re = /\s*_\s*_\s*/;
    const dateAux = date.split('_');

    const dateFormat = new Date(parseInt(dateAux[2]), parseInt(dateAux[1]) - 1, parseInt(dateAux[0]));

    const { page, perPage, sortBy } = req.query;
    const { id } = req.session;
    var params = { where: { user_id: id } };
    const salon = await salonService.listByUser({ page, perPage, sortBy, params });
    console.log(salon.data[0].id);
    console.log(id);

    params = {
      where: {
        date: dateFormat,
        salon_id: salon.data[0].id,
      },
      include: {
        attributes: ['name'],
        model: User,
        as: 'user',
      },
    };
    const response = await schedulingService.list(params);

    return res.status(StatusCodes.OK).json(response);
  }),

  create: catchAsync(async (req, res) => {
    const { body } = req;
    body.user_id = req.session.id;

    const response = await schedulingService.create(body);

    return res.status(StatusCodes.CREATED).json(response);
  }),

  update: '',

  destroy: '',
};
