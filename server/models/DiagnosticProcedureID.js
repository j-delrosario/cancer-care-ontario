var mongoose = require("mongoose");
const SDCForm = require("./SDCForm");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: Number, required: true},
    // procedureForm: SDCForm,
    // responses: Array[Number], //TODO: replace with SDCQuestionResponse?,
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);