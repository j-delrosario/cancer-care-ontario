var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var DiagnosticProcedureID = new Schema({
<<<<<<< HEAD
    id: {type: Number, required: true},
    procedureForm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCForm"},
        responses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SDCFormResponse"}], //Is storing this more efficient than just searching the responses?
=======
    id: {type: String, required: true},
>>>>>>> main
    });

module.exports = mongoose.model("DiagnosticProcedureID", DiagnosticProcedureID);