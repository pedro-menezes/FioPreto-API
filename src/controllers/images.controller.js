const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { imagesService } = require('../services');
const { messages } = require('../helpers');

module.exports = {
  list: '',
  get: '',
  create: catchAsync(async (req, res) => {
    const { location: url = '', key } = req.file;
    return res.json({ url: url, key: key });
  }),
  update: '',
  destroy: catchAsync(async (req, res) => {
    const { id } = req.params;
    await imagesService.destroy(id);
    return res.status(StatusCodes.NO_CONTENT).end();
  }),
};
