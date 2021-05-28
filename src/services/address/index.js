const { create } = require('./create.service');
const { getBySalon } = require('./getBySalon.service');
const { update } = require('./update.service');
const { listCity } = require('./listCity.service');
const { destroy } = require('./destroy.service');

module.exports = {
  getBySalon,
  create,
  update,
  destroy,
  listCity,
};
