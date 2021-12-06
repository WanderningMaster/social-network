const Router = require('express');
const UserController = require('../controllers/user.controller');

const router = new Router();

router.post('/user', UserController.createUser);
router.get('/users/:count', UserController.getUsers);
router.get('/user/:id', UserController.getOneUser);
router.put('/user/:id', UserController.updateUser);
router.delete('/user/:id'   , UserController.deleteUser);


module.exports = router;