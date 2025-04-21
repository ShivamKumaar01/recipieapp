const router = require('express').Router();
const { recipieByCategoryController } = require('../controllers');

router.get('/:category',recipieByCategoryController.recipieByCategory)

module.exports = router;