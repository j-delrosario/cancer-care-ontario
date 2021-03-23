const router = require('Express').Router();
const diagnosticProcedureController = require('../controllers/diagnosticProcedureController');

router.get('/', diagnosticProcedureController.findAllDiagnosticProcedures);
router.get('/:id', diagnosticProcedureController.findDiagnosticProcedureByID);

module.exports = router;