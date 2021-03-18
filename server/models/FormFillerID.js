var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var FormFillerID = new Schema({
    name: String,
    responses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCFormResponse"}], //Should delete this?
    });

module.exports = mongoose.model("FormFillerID", FormFillerID);