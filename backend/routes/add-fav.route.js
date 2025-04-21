const router = require('express').Router();
const {addFavController} = require('../controllers');
const authMiddleware = require('../middleware/auth.middleware');
router.post('/',authMiddleware,addFavController.addFav);
module.exports = router;