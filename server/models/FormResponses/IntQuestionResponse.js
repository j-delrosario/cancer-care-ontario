var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var IntQuestionResponseSchema = new Schema({
    answer: {type: Number, required: true}
});

module.exports = mongoose.model("IntQuestionResponse", IntQuestionResponseSchema);