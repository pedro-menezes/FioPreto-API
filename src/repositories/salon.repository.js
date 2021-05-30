const { Salon } = require('../models');

module.exports = {
  list: (query) => Salon.findAndCountAll(query),
  getById: (params) => Salon.findByPk(params),
  get: (params) => Salon.findOne(params),
  create: (params) => Salon.create(params),
  update: (salon) => salon.save(),
  destroy: (id) => Salon.destroy({ where: { id } }),
};
