const router = require('express').Router();

// router.use('/auth', require('./auth'));
// router.use('/profile',require('./profile'))
router.use('/user',require('./adduser.route'))
router.use('/recipie',require('./addrecipie.route'))
router.use('/login',require('./login-user.route'))
router.use('/recipies',require('./category.route'))

module.exports = router;