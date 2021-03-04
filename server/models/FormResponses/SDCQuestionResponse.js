var mongoose = require("mongoose");
const IntQuestionResponse = require("./IntQuestionResponse");
const TrueFalseQuestionResponse = require("./TrueFalseQuestionResponse"); 
const StringQuestionResponse = require("./StringQuestionResponse"); 
const CheckboxQuestionResponse = require("./CheckboxQuestionResponse"); 
const RadioButtonQuestionResponse = require("./RadioButtonQuestionResponse"); 
var Schema = mongoose.Schema;

var SDCQuestionResponseSchema = new Schema({
    id: {type: Number, required: true},
    SDCSectionId: {type: Number, required: true},
    SDCQuestionId: {type: Number, required: true},
    SDCFormResponseId: {type: Number, required: true},
    answer: [
                IntQuestionResponse | 
                TrueFalseQuestionResponse | 
                StringQuestionResponse | 
                CheckboxQuestionResponse | 
                RadioButtonQuestionResponse
            ]
});

module.exports = mongoose.model("SDCQuestionResponse", SDCQuestionResponseSchema);