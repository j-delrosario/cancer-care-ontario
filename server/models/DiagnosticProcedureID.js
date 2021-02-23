var mongoose = require("mongoose");
const SDCForm = require("./SDCForm");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: Number, required: true},
    procedureForm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCForm"},
    responses: [Number], //TODO: replace with SDCQuestionResponse?,
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);