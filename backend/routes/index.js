const router = require('express').Router();

// router.use('/auth', require('./auth'));
// router.use('/profile',require('./profile'))
router.use('/user',require('./add-user.route'))
router.use('/recipie',require('./add-recipie.route'))
router.use('/login',require('./login-user.route'))
// router.use('/recipies',require('./category.route'))
router.use('/recipies',require('./get-recipie.route'))
router.use('/favourite',require('./add-fav.route'))

module.exports = router;