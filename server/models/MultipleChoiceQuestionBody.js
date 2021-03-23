var mongoose = require("mongoose");
const SDCQuestion = require("./SDCQuestion");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var MultipleChoiceQuestionBodySchema = new Schema(
    {
        choices: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "SDCQuestion",
        }],
    },
    SDCQuestionBody.options
);

module.exports = SDCQuestionBody.discriminator("MultipleChoice", MultipleChoiceQuestionBodySchema);