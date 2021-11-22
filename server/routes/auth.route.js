const Router = require('express');
const AuthController = require('../controllers/auth.controller');

const router = new Router();

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/me', AuthController.me);

module.exports = router;