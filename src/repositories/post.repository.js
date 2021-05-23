const { Post } = require('../models');

module.exports = {
  list: (query) => Post.findAndCountAll(query),
  getById: (id) => Post.findByPk(id),
  get: (params) => Post.findOne({ where: params }),
  create: (params) => Post.create(params),
  update: (post) => post.save(),
  destroy: (id) => Post.destroy({ where: { id } }),
};
