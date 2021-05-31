const { Scheduling } = require('../models');

module.exports = {
  list: (query) => Scheduling.findAndCountAll(query),
  create: (params) => Scheduling.create(params),
  get: (params) => Scheduling.findOne({ where: params }),
};
