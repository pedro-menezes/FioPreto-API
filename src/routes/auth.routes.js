const router = require('express').Router();
const { authController, usersController } = require('../controllers');
const { validate } = require('../middlewares');
const {
  validationSchemas: { auth, user },
} = require('../validations');

router.post('/register', validate(user.create), usersController.create);
router.post('/signin', validate(auth.signin), authController.signin);
router.post('/forgot-password', validate(auth.forgotPassword), authController.forgotPassword);
router.post('/:token/reset-password', validate(auth.resetPassword), authController.resetPassword);
router.post('/refresh-token', validate(auth.refreshToken), authController.refreshToken);
module.exports.auth = router;
