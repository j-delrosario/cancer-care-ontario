var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FormFillerID = new Schema({
    id: {type: Number, required: true},
    name: String,
    responses: [Number], //TODO: replace with SDCQuestionResponse?,
    });

module.exports = mongoose.model("FormFillerID", FormFillerID);