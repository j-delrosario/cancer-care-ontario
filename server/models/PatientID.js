var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientID = new Schema({
  // patient's _id is type: mongoose.Schema.Types.ObjectId
  name: String,
  OHIPNumber: Number,
  responses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "SDCFormResponse"}], //Should delete this?
});

module.exports = mongoose.model("PatientID", PatientID);