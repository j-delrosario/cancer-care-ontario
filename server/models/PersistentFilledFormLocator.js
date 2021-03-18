var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersistentFilledFormLocator = new Schema({
    filledform: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCFormResponse"}, // This is the _id of the relevant SDCFormResponse
    url: {type: String, default: this._id.str}
    });

module.exports = mongoose.model("PersistentFilledFormLocator", PersistentFilledFormLocator);