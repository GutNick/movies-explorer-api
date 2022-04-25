const router = require('express').Router();
const userRoutes = require('./users');
const movieRoutes = require('./movies');
const { validateCreateUser, validateLogin } = require('../validate/validator');
const { createUser, login } = require('../controllers/users');
const auth = require('../middlewares/auth');

router.post('/signup', validateCreateUser, createUser);
router.post('/signin', validateLogin, login);

router.use('/users', auth, userRoutes);
router.use('/movies', auth, movieRoutes);

router.use('/', auth);

module.exports = router;
