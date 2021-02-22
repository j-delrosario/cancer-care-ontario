var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var IntQuestionBodySchema = new Schema(
    {
    //TODO: for when we decide how to handle Integer validation
    },
    questionBody.options
);

var IntQuestionBody = SDCQuestionBody.discriminator("Int", IntQuestionBodySchema);

module.exports = mongoose.model("IntQuestionBody", IntQuestionBody);