const yup = require('yup');

const destroy = {
  params: yup.object().shape({
    id: yup.string(),
  }),
};

module.exports.image = {
  destroy,
};
