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
    salon: yup.object().shape({
      name: yup.string().required(),
      phone: yup.string().required().matches('^\\(\\d{2}\\)\\d{4,5}\\-\\d{4}$'),
      site: yup.string(),
      user_id: yup.number().integer(),
      img: yup.string(),
      key_img: yup.string(),
      payMethods: yup.string(),
      opening: yup.string(),
      closing: yup.string(),
      cnpj: yup
        .string()
        .test('len', 'Must be exactly 14 characters', (val) => val.length === 14)
        .matches(/^[0-9]+$/, 'Must be only digits'),
    }),
    address: yup.object().shape({
      zip: yup
        .string()
        .test('len', 'Must be exactly 8 characters', (val) => val.length === 8)
        .matches(/^[0-9]+$/, 'Must be only digits'),
      street: yup.string().required(),
      street1: yup.string(),
      number: yup.number().required(),
      lat: yup.number(),
      lng: yup.number(),
      district: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().test('len', 'Must be exactly 2 characters', (val) => val.length === 2),
      ddd: yup.string(),
    }),
  }),
};

const update = {
  params: yup.object().shape({
    id: yup.number().integer(),
  }),
  body: yup.object().shape({
    salon: yup.object().shape({
      name: yup.string().required(),
      phone: yup.string().required().matches('^\\(\\d{2}\\)\\d{4,5}\\-\\d{4}$'),
      site: yup.string(),
      user_id: yup.number().integer(),
      img: yup.string(),
      key_img: yup.string(),
      payMethods: yup.string(),
      opening: yup.string().required(),
      closing: yup.string().required(),
      cnpj: yup
        .string()
        .test('len', 'Must be exactly 14 characters', (val) => val.length === 14)
        .matches(/^[0-9]+$/, 'Must be only digits'),
    }),
    address: yup.object().shape({
      zip: yup
        .string()
        .test('len', 'Must be exactly 8 characters', (val) => val.length === 8)
        .matches(/^[0-9]+$/, 'Must be only digits'),
      street: yup.string().required(),
      street1: yup.string(),
      number: yup.number().required(),
      lat: yup.number(),
      lng: yup.number(),
      district: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().test('len', 'Must be exactly 2 characters', (val) => val.length === 2),
      ddd: yup.string(),
    }),
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
