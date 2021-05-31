const yup = require('yup');

const list = {
  query: yup.object().shape({
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(/[:](asc|desc)/i, "sorting order must be one of the following: 'asc' or 'desc'"),
  }),
};

const get = {
  query: yup.object().shape({
    page: yup.number().integer().default(1),
    perPage: yup.number().integer().default(10),
    sortBy: yup
      .string()
      .default('createdAt:desc')
      .matches(/[:](asc|desc)/i, "sorting order must be one of the following: 'asc' or 'desc'"),
  }),

  params: yup.object().shape({
    date: yup.string(),
  }),
};

const create = {
  body: yup.object().shape({
    user_id: yup.number().integer().required(),
    salon: yup.number().integer().required(),
    dateTime: yup.string().required(),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    user_id: yup.number().integer().required(),
    salon: yup.number().integer().required(),
    dateTime: yup.string().required(),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.scheduling = {
  list,
  get,
  create,
  update,
  destroy,
};
