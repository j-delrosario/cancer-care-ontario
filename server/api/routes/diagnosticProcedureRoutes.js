const router = require('express').Router();
const diagnosticProcedureController = require('../controllers/diagnosticProcedureController');

router.get('/', diagnosticProcedureController.findAllDiagnosticProcedures);
router.get('/:id', diagnosticProcedureController.findDiagnosticProcedureByID);

module.exports = router;