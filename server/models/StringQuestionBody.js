var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var StringQuestionBodySchema = new Schema(
    {
    //TODO: for when we decide how to handle String validation
    },
    questionBody.options
);

var StringQuestionBody = SDCQuestionBody.discriminator("String", StringQuestionBodySchema);

module.exports = mongoose.model("StringQuestionBody", StringQuestionBody);