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
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

const create = {
  body: yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required().matches('^\\(\\d{2}\\)\\d{4,5}\\-\\d{4}$'),
    site: yup.string(),
    user_id: yup.number().integer(),
    payMethods: yup.string(),
    cnpj: yup
      .string()
      .test('len', 'Must be exactly 14 characters', (val) => val.length === 14)
      .matches(/^[0-9]+$/, 'Must be only digits'),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    name: yup.string(),
    phone: yup.string().matches('^\\(\\d{2}\\)\\d{4,5}\\-\\d{4}$'),
    site: yup.string(),
    payMethods: yup.string(),
    cnpj: yup
      .string()
      .test('len', 'Must be exactly 14 characters', (val) => val.length === 14)
      .matches(/^[0-9]+$/, 'Must be only digits'),
  }),
};

const destroy = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
};

module.exports.salon = {
  list,
  get,
  create,
  update,
  destroy,
};
