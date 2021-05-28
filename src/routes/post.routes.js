const router = require('express').Router();
const { postsController } = require('../controllers');
const { isAuthorized, validate } = require('../middlewares');
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
router.post('/', validate(post.create), postsController.create);

module.exports.post = router;
