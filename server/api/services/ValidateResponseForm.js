const models = require("../../models")

const ValidateResponse = require("./ValidateResponse");

module.exports = async (body) => {
    let invalidElements = [];

    const dpid = await models.DiagnosticProcedureID.findOne(body.SDCForm.diagnosticProcedure);
    if (!dpid)
        invalidElements.push("DiagnosticProcedure");

    const patient = await models.PatientID.findOne({_id: body.patient._id});
    if(!patient)
        invalidElements.push("PatientID")

    const formFiller = await models.FormFillerID.findOne({_id: body.formFiller._id});
    if(!formFiller)
        invalidElements.push("FormFillerID")

    Array.prototype.push.apply(invalidElements, ValidateResponse(body.SDCForm));
    return invalidElements;
}