var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TrueFalseQuestionResponseSchema = new Schema({
    answer: {type: Boolean, required: true}
});

module.exports = mongoose.model("TrueFalseQuestionResponse", TrueFalseQuestionResponseSchema);