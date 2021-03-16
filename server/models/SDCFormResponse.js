var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SDCFormResponse = mongoose.model("SDCFormResponse", {
  // id: {type: Number, required: true},
  patient: { type: Object, required: true },
  form: { type: Object, required: true },
  formTitle: { type: String, required: true },
});

module.exports = { SDCFormResponse };
