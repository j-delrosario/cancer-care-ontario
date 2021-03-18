const router = require('Express').Router();
const SDCFormController = require('../controllers/SDCFormController');

router.get('/', SDCFormController.findAllSDCForms);
router.get('/:id', SDCFormController.findSDCFormByDPID);

router.post('/', SDCFormController.saveSDCForm);

router.delete('/:id', SDCFormController.deleteSDCFormByDPID);


module.exports = router;