var mongoose = require("mongoose");
var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
var Schema = mongoose.Schema;

var SDCQuestionSchema = new Schema({
    id: {type: Number, required: true},
    // orderNumber: {type: Number, required: true},
    controlQuestion: Number, //TODO: replace with SDCQuestionResponse?
    controlAnswer: String,
    //questionBody: SDCQuestionBody,
});

module.exports = mongoose.model("SDCQuestion", SDCQuestionSchema);