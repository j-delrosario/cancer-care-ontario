var mongoose = require("mongoose");
const IntQuestionResponse = require("./IntQuestionResponse"); //TODO NEEDS TO BE IMPLEMENTED
const TrueFalseQuestionResponse = require("./TrueFalseQuestionResponse"); //TODO NEEDS TO BE IMPLEMENTED
const StringQuestionResponse = require("./StringQuestionResponse"); //TODO NEEDS TO BE IMPLEMENTED
const CheckboxQuestionResponse = require("./CheckboxQuestionResponse"); //TODO NEEDS TO BE IMPLEMENTED
const RadioButtonQuestionResponse = require("./RadioButtonQuestionResponse"); //TODO NEEDS TO BE IMPLEMENTED
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