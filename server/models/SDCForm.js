var mongoose = require("mongoose");
//const SDCSection = require("./SDCSection");
const DiagnosticProcedureID = require("./DiagnosticProcedureID");
var Schema = mongoose.Schema;

// var options = { discriminatorKey: "questionType"};

// var SDCQuestionBody= new Schema(
//     {
//         questionTitle: String,
//         questionText: String,
//     },
//     options);

// var SDCQuestion = new Schema({
//     id: {type: Number, required: true},
//     orderNumber: {type: Number, required: true},
//     controlQuestion: Number, //TODO: replace with SDCQuestionResponse?
//     controlAnswer: String,
//     questionBody: SDCQuestionBody,
// });

// var SDCSection = new Schema({
//     id: {type: Number, required: true},
//     title: String,
//     sectionText: String,
//     questions: {
//         type: [SDCQuestion]
//     },
// });

var SDCFormSchema = new Schema({
    id: {type: Number, required: true},
    diagnosticProcedure: {type: DiagnosticProcedureID, required: true},
    // sections: {
    //     type: [SDCSection] // can't use other models within schemas?
    // },
    sections: [String],
    questions: [String]
});

module.exports = mongoose.model("SDCForm", SDCFormSchema);