var mongoose = require("mongoose");
const SDCForm = require("../SDCForm");
const DiagnosticProcedureID = require("../DiagnosticProcedureID");
const FormFillerID = require("../FormFillerID");
const PatientID = require("../PatientID");
const SDCQuestionResponse = require("./SDCQuestionResponse");
const PersistentFilledFormLocator = require("../PersistentFilledFormLocator");
var Schema = mongoose.Schema;

var SDCFormResponseSchema = new Schema({
  //   id: { type: Number, required: true },
  diagnosticProcedure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DiagnosticProcedureID",
    required: true,
  },
  //SDCForm: {
  //  type: mongoose.Schema.Types.ObjectId,
  //  ref: "SDCForm",
  //  required: true,
  //},
  SDCForm: { type: Object, required: true }, // Saving a copy of the form here avoids versioning issues
  formFillerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FormFillerID",
    required: true,
  },
  patientID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientID",
    required: true,
  },
  patient: { type: PatientID.schema },
  formFiller: { type: FormFillerID.schema },
  timestamp: { type: Date, required: true },
  questionResponses: [SDCQuestionResponse.schema],
  persistentLocator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PersistentFilledFormLocator",
    required: false,
  },
});

module.exports = mongoose.model("SDCFormResponse", SDCFormResponseSchema);
