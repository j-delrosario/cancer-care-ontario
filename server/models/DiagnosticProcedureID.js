var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: String, required: true},
    lineage: {type: String, required: true},
    version: {type: String, required: true},
    deprecated: {type: Boolean, default: false},
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);