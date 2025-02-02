const diagnosticProcedureModel = require('../../models/DiagnosticProcedureID');

const findAllDiagnosticProcedures = async (req, res) => {
    try {
      const diagnosticProcedures = await diagnosticModel.find({"deprecated": false});
      res.send(diagnosticProcedures)
    } catch (err) {
      res.status(500).send(err);
    }
}

const findDiagnosticProcedureByID = async (req, res) => {
    try {
        const diagnosticProcedure = await diagnosticProcedureModel.findOne({"id": req.params.id, "deprecated": false});
        res.send(diagnosticProcedure);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    findAllDiagnosticProcedures,
    findDiagnosticProcedureByID,
}