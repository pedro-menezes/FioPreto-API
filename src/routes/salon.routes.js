const router = require('express').Router();
const { salonController } = require('../controllers');
const { isHairdresser, isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { salon },
} = require('../validations');

router.use(isAuthorized);
router.get('/', validate(salon.list), salonController.list);
router.get('/:id', validate(salon.get), salonController.get);
router.put('/:id', validate(salon.update), salonController.update);
router.delete('/:id', validate(salon.destroy), salonController.destroy);

router.use(isHairdresser);
router.post('/', validate(salon.create), salonController.create);

module.exports.salon = router;
