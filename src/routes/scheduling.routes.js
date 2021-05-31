const router = require('express').Router();
const { schedulingController } = require('../controllers');
const { isAuthorized } = require('../middlewares');
const { validate } = require('../middlewares');
const {
  validationSchemas: { scheduling },
} = require('../validations');

router.use(isAuthorized);
router.get('/:date', validate(scheduling.get), schedulingController.list);

module.exports.scheduling = router;
