var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: String, required: true},
    responses: [Number], //TODO: replace with SDCQuestionResponse?,
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);