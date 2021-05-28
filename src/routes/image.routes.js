const router = require('express').Router();
const { imagesController } = require('../controllers');
const { isAuthorized } = require('../middlewares');
const multer = require('multer');
const multerConfig = require('../config/multer');
const { validate } = require('../middlewares');
const {
  validationSchemas: { image },
} = require('../validations');

router.post('/', multer(multerConfig).single('file'), imagesController.create);
router.use(isAuthorized);
router.delete('/:id', validate(image.destroy), imagesController.destroy);

module.exports.image = router;
