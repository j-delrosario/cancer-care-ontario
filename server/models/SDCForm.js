var mongoose = require("mongoose");
const SDCSection = require("./SDCSection");
var Schema = mongoose.Schema;

var SDCFormSchema = new Schema({
    id: {type: Number, required: true},
    diagnosticProcedure: {type: Number, required: true}, //TODO: Replace with DiagnosticProcedureID when implemented
    sections: Array[SDCSection],
});

module.exports = mongoose.model("SDCForm", SDCFormSchema);