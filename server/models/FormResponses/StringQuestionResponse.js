var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var StringQuestionResponseSchema = new Schema({
    answer: {type: Number, required: true}
});

module.exports = mongoose.model("StringQuestionResponse", StringQuestionResponseSchema);