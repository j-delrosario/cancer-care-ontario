const router = require('Express').Router();
const SDCFormController = require('../controllers/SDCFormController');
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

router.get('/', SDCFormController.findAllSDCForms);
router.get('/:id', SDCFormController.findSDCFormByDPID);

router.post('/', multipartMiddleware, SDCFormController.saveSDCForm);

router.delete('/:id', SDCFormController.deleteSDCFormByDPID);


module.exports = router;