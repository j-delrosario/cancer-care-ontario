var mongoose = require("mongoose");
const SDCForm = require("./SDCForm");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
    id: {type: Number, required: true},
    procedureForm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCForm"},
        responses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SDCFormResponse"}], //Is storing this more efficient than just searching the responses?
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);