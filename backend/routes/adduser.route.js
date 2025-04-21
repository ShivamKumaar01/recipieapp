const router = require('express').Router();
const { addUserController } = require('../controllers');

router.post('/',addUserController.addUser)

module.exports = router;