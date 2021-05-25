const { Address } = require('../models');

module.exports = {
  create: (params) => Address.create(params),
  get: (params) => Address.findOne({ where: params }),
  getById: (id) => Address.findByPk(id),
  update: (salon) => salon.save(),
  destroy: (id) => Address.destroy({ where: { id } }),
};
