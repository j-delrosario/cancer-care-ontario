var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SDCFormResponse = mongoose.model("SDCFormResponse", {
  // id: {type: Number, required: true},
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "PatientID", required: true},
  form: { type: mongoose.Schema.Types.ObjectId, ref: "SDCForm", required: true},
  formTitle: { type: String, required: true },
});

module.exports = { SDCFormResponse };
