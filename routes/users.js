const userRouter = require('express').Router();
const { updateUser, getUser } = require('../controllers/users');
const { validateUpdateUser } = require('../validate/validator');

userRouter.get('/me', getUser);
userRouter.patch('/me', validateUpdateUser, updateUser);

module.exports = userRouter;
