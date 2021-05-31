const router = require('express').Router();
const { salonsController } = require('../controllers');
const { isHairdresser, isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { salon },
} = require('../validations');

router.get('/', validate(salon.list), salonsController.list);
router.get('/city/', salonsController.listCity);
router.post('/', validate(salon.create), salonsController.create);
router.get('/city/:ibge', validate(salon.getByCity), salonsController.listByCity);

router.use(isAuthorized);
router.use(isHairdresser);
router.get('/user/', validate(salon.list), salonsController.listByUser);
router.get('/:id', validate(salon.get), salonsController.get);
router.put('/:id', validate(salon.update), salonsController.update);
router.delete('/:id', validate(salon.destroy), salonsController.destroy);

module.exports.salon = router;
