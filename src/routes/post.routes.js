const router = require('express').Router();
const { postsController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
const multer = require('multer');
const multerConfig = require('../config/multer');
const {
  validationSchemas: { post },
} = require('../validations');

router.get('/', validate(post.list), postsController.list);
router.get('/tips/', validate(post.list), postsController.listTips);
router.get('/feed/', validate(post.list), postsController.listFeed);

router.use(isAuthorized);
router.get('/:id', validate(post.get), postsController.get);
router.put('/:id', validate(post.update), postsController.update);
router.delete('/:id', validate(post.destroy), postsController.destroy);
router.post('/feed/', multer(multerConfig).single('file'), postsController.createFeed);
router.post('/tips/', multer(multerConfig).single('file'), postsController.createTips);

module.exports.post = router;
