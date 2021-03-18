var mongoose = require("mongoose");
const SDCSection = require("./SDCSection");
const SDCQuestion = require("./SDCQuestion");
const DiagnosticProcedureID = require("./DiagnosticProcedureID");
const DeleteObjectArray = require('../services/DeleteObjectArray');
var Schema = mongoose.Schema;

var SDCFormSchema = new Schema({
    id: {type: String, required: true},
    lineage: {type: String, required: true},
    version: {type: String, required: true},
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



function autoPopulateForm(next) {
    this.populate('diagnosticProcedure');
    this.populate('questions');
    this.populate('sections');
    next();
}

async function autoDeleteForm(next) {
    const docToDelete = await this.model.findOne(this.getQuery());

    await DeleteObjectArray(docToDelete.questions, SDCQuestion, "Question");
    await DeleteObjectArray(docToDelete.sections, SDCSection, "Section");
    await DeleteObjectArray([docToDelete.diagnosticProcedure], DiagnosticProcedureID, "Diagnostic Procedure");
    next();
}

SDCFormSchema.pre('findOne', autoPopulateForm).pre('find', autoPopulateForm);
SDCFormSchema.pre('deleteOne', autoDeleteForm);

module.exports = mongoose.model("SDCForm", SDCFormSchema);
