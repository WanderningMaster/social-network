const Router = require('express');
const AuthController = require('../controllers/auth.controller');
const auth = require('../middlewares/Auth');

const router = new Router();

router.post('/login', AuthController.login);
router.post('/logout', auth, AuthController.logout);
router.get('/me', auth, AuthController.me);

module.exports = router;
