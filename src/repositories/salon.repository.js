const { Salon } = require('../models');

module.exports = {
  list: (query) => Salon.findAndCountAll(query),
  getById: (id) => Salon.findByPk(id),
  get: (params) => Salon.findOne({ where: params }),
  create: (params) => Salon.create(params),
  update: (salon) => salon.save(),
  destroy: (id) => Salon.destroy({ where: { id } }),
};
