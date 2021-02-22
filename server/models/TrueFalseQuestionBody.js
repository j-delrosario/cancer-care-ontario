var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var TrueFalseQuestionBodySchema = new Schema(
    {
    //TODO: for when we decide how to handle True/False validation
    },
    questionBody.options
);

var TrueFalseQuestionBody = SDCQuestionBody.discriminator("TrueFalse", TrueFalseQuestionBodySchema);

module.exports = mongoose.model("TrueFalseQuestionBody", TrueFalseQuestionBody);