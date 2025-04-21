const router = require('express').Router();
const { addRecipieController } = require('../controllers');
const authMiddleware = require('../middleware/auth.middleware');
router.post('/',authMiddleware,addRecipieController.addRecipie);
module.exports = router;