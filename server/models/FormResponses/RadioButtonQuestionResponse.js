var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RadioButtonQuestionResponseSchema = new Schema({
    answer: {type: Number, required: true}
});

module.exports = mongoose.model("RadioButtonQuestionResponse", RadioButtonQuestionResponseSchema);