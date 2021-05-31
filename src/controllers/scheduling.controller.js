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
    const salon = await salonService.listByUser({ page, perPage, sortBy, id });
    console.log(dateFormat);
    console.log(salon.data[0].id);

    const params = { where: { date: dateFormat, salon_id: salon.data[0].id } };
    const response = await schedulingService.list(params);

    return res.status(StatusCodes.OK).json(response);
  }),

  createFeed: '',

  createTips: '',

  update: '',

  destroy: '',
};
