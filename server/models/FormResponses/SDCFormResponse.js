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
    diagnosticProcedure: { type: mongoose.Schema.Types.ObjectId, ref: "DiagnosticProcedureID", required: true},
    SDCForm: {type: SDCForm, required: true}, // Saving a copy of the form here avoids versioning issues
    formFiller: { type: mongoose.Schema.Types.ObjectId, ref: "FormFillerID", required: true},
    patientID: { type: mongoose.Schema.Types.ObjectId, ref: "PatientID", required: true},
    timestamp: {type: Date, required: true},
    questionResponses: {type: Array[SDCQuestionResponse]},
    persistentLocator: {type: PersistentFilledFormLocator, required: true}
});

module.exports = mongoose.model("SDCFormResponse", SDCFormResponseSchema);