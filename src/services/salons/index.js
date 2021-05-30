const { create } = require('./create.service');
const { list } = require('./list.service');
const { listByUser } = require('./listByUser.service');
const { get } = require('./get.service');
const { update } = require('./update.service');
const { destroy } = require('./destroy.service');
const { listByCity } = require('./listByCity.service');
const { getById } = require('./getById.service');

module.exports = {
  list,
  listByUser,
  get,
  create,
  update,
  destroy,
  listByCity,
  getById,
};
