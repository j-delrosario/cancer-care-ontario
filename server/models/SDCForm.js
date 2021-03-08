var mongoose = require("mongoose");
const SDCSection = require("./SDCSection");
const SDCQuestion = require("./SDCQuestion");
const DiagnosticProcedureID = require("./DiagnosticProcedureID");
var Schema = mongoose.Schema;

var SDCFormSchema = new Schema({
    id: {type: String, required: true},
    title: String,
    diagnosticProcedure: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiagnosticProcedureID",
        required: [true, "ProcedureID is required"]},
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCSection",
    }],
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCQuestion",
    }],
});

module.exports = mongoose.model("SDCForm", SDCFormSchema);