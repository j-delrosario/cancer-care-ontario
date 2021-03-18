var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CheckboxQuestionResponseSchema = new Schema({
    answer: {type: Number, required: true}
});

module.exports = mongoose.model("CheckboxQuestionResponse", CheckboxQuestionResponseSchema);