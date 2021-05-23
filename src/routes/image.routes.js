const router = require('express').Router();
const { imagesController } = require('../controllers');
const { isAuthorized } = require('../middlewares');
const multer = require('multer');
const multerConfig = require('../config/multer');

router.use(isAuthorized);
router.post('/', multer(multerConfig).single('file'), imagesController.create);

module.exports.image = router;
