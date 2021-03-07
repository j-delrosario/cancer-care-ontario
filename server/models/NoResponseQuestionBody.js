var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var NoResponseQuestionBodySchema = new Schema(
    {
    //TODO: for when we decide how to handle True/False validation
    },
    SDCQuestionBody.options
);

module.exports = SDCQuestionBody.discriminator("NoResponse", NoResponseQuestionBodySchema);