const router = require('express').Router();
const {loginUserController} = require('../controllers');

router.post('/',loginUserController.loginUser)

module.exports = router;