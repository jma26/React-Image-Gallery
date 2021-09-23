const router = require('express').Router();
const users = require('../controllers/user.controller')
const checkIfAuthenticated = require('../middleware/auth.middleware');

router.post('/signup', users.createUser);
router.get('/login', users.login);


module.exports = router;