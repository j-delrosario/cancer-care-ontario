const router = require('express').Router();
const PFFLController = require('../controllers/PFFLController');

router.get('/id/:id', PFFLController.findURLForFormResponseByID);
router.get('/:url', PFFLController.findSDCFormResponseByURL);

module.exports = router;