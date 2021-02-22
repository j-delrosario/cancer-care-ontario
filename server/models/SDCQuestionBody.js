var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var options = { discriminatorKey: "questionType"};

var SDCQuestionBodySchema = new Schema(
    {
        questionTitle: String,
        questionText: String,
    },
    options);

module.exports = mongoose.model("SDCQuestionBody", SDCQuestionBody);
module.exports.options = options;