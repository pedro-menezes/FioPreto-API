const { Scheduling } = require('../models');

module.exports = {
  list: (query) => Scheduling.findAndCountAll(query),
};
