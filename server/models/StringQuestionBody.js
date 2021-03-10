var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var StringQuestionBodySchema = new Schema(
    {
    //TODO: for when we decide how to handle String validation
    },
    SDCQuestionBody.options
);

module.exports = SDCQuestionBody.discriminator("String", StringQuestionBodySchema);