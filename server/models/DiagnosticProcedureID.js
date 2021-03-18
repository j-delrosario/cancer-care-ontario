var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: String, required: true},
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);