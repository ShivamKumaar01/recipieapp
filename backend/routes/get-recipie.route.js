const router = require('express').Router();
const { getaAllRecipieController } = require('../controllers');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/',authMiddleware,getaAllRecipieController.getAllRecipie)

module.exports = router;