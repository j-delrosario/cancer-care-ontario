var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var MultipleChoiceQuestionBodySchema = new Schema(
    {
        isRadio: Boolean,
        choices: [],
    },
    SDCQuestionBody.options
);

module.exports = SDCQuestionBody.discriminator("MultipleChoice", MultipleChoiceQuestionBodySchema);