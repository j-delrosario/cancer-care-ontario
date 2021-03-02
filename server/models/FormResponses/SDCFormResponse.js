var mongoose = require("mongoose");
const SDCForm = require("../SDCForm");
const DiagnosticProcedureID = require("../DiagnosticProcedureID");
const FormFillerID = require("../FormFillerID");
const PatientID = require("../PatientID");
const SDCQuestionResponse = require("./SDCQuestionResponse");
const PersistentFilledFormLocator = require("../PersistentFilledFormLocator");
var Schema = mongoose.Schema;

var SDCFormResponseSchema = new Schema({
    id: {type: Number, required: true},
    diagnosticProcedure: {type: DiagnosticProcedureID, required: true},
    SDCForm: {type: SDCForm, required: true},
    formFiller: {type: FormFillerID, required: true},
    patientID: {type: PatientID, required: true},
    timestamp: {type: Date, required: true},
    questionResponses: {type: Array[SDCQuestionResponse]},
    persistentLocator: PersistentFilledFormLocator
});

module.exports = mongoose.model("SDCFormResponse", SDCFormResponseSchema);