var mongoose = require("mongoose");
const SDCSection = require("./SDCSection");
const DiagnosticProcedureID = require("./DiagnosticProcedureID");
var Schema = mongoose.Schema;

var SDCFormSchema = new Schema({
    id: {type: Number, required: true},
    diagnosticProcedure: {type: DiagnosticProcedureID, required: true},
    sections: Array[SDCSection],
});

module.exports = mongoose.model("SDCForm", SDCFormSchema);