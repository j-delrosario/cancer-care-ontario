var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var MultipleChoiceQuestionBodySchema = new Schema(
    {
        isRadio: Boolean,
        choices: [String],
    },
    questionBody.options
);

var MultipleChoiceQuestionBody = SDCQuestionBody.discriminator("MultipleChoice", MultipleChoiceQuestionBodySchema);

module.exports = mongoose.model("MultipleChoiceQuestionBody", MultipleChoiceQuestionBody);