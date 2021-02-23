var mongoose = require("mongoose");
const SDCSection = require("./SDCSection");
const DiagnosticProcedureID = require("./DiagnosticProcedureID");
var Schema = mongoose.Schema;

var SDCFormSchema = new Schema({
    id: {type: Number, required: true},
    diagnosticProcedure: {type: Number, required: true},
    // Remove below after P1
    sections: [String],
    questions: [String],

    // Below is working copy
    /*
    diagnosticProcedure: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiagnosticProcedureID",
        required: true},
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCSection",
    }],*/
});

module.exports = mongoose.model("SDCForm", SDCFormSchema);