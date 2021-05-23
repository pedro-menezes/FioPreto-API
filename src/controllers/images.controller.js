const { StatusCodes } = require('http-status-codes');
const { catchAsync, ApplicationError } = require('../utils');
const { postsService } = require('../services');
const { messages } = require('../helpers');

module.exports = {
  list: '',
  get: '',
  create: catchAsync(async (req, res) => {
    let { location: url = '' } = req.file;
    return res.json({ url: url });
  }),
  update: '',
  destroy: '',
};
