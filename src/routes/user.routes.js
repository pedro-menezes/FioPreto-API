const router = require('express').Router();
const { usersController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const {
  validationSchemas: { user },
} = require('../validations');

router.use(isAuthorized);

router.get('/', validate(user.list), usersController.list);
router.get('/:id', validate(user.get), usersController.get);
router.post('/', validate(user.create), usersController.create);
router.put('/:id', validate(user.update), usersController.update);
router.delete('/:id', validate(user.destroy), usersController.destroy);

module.exports.user = router;
