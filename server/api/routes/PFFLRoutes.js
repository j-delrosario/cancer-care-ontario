const router = require('Express').Router();
const PFFLController = require('../controllers/PFFLController');

router.get('/id/:id', PFFLController.findURLForFormResponseByID);
router.get('/:url', PFFLController.findSDCFormResponseByURL);

module.exports = router;