var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersistentFilledFormLocator = new Schema({
    id: {type: Number, required: true}, //Should this be the id of the SDCQuestionResponse or an id just for the locator? I think it should be the response ID
    filledform: Number, //TODO: replace with SDCQuestionResponse?,
    url: String,
    });

module.exports = mongoose.model("PersistentFilledFormLocator", PersistentFilledFormLocator);