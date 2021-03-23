var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var options = { discriminatorKey: "questionType"};

var SDCQuestionBodySchema = new Schema(
    {
        questionTitle: String,
        questionText: String,
    },
    options
);

function autoPopulateQuestionBody(next) {
    this.populate('choices');
    next();
}

SDCQuestionBodySchema.pre('findOne', autoPopulateQuestionBody).pre('find', autoPopulateQuestionBody);

module.exports = mongoose.model("SDCQuestionBody", SDCQuestionBodySchema);
module.exports.options = options;