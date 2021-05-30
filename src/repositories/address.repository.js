const { Address } = require('../models');

module.exports = {
  create: (params) => Address.create(params),
  list: (params) => Address.findAndCountAll(params),
  get: (params) => Address.findOne(params),
  getById: (id) => Address.findByPk(id),
  update: (salon) => salon.save(),
  destroy: (id) => Address.destroy({ where: { id } }),
};
