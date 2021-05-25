const router = require('express').Router();
const { salonsController } = require('../controllers');
const { isHairdresser, isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { salon },
} = require('../validations');

router.use(isAuthorized);
router.get('/', validate(salon.list), salonsController.list);
router.get('/user/', validate(salon.list), salonsController.listByUser);
router.get('/:id', validate(salon.get), salonsController.get);
router.put('/:id', validate(salon.update), salonsController.update);
router.delete('/:id', validate(salon.destroy), salonsController.destroy);

router.use(isHairdresser);
router.post('/', validate(salon.create), salonsController.create);

module.exports.salon = router;
