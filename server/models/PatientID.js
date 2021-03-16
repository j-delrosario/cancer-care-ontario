var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientID = mongoose.model("PatientID", {
  // id: {type: Number, required: true},
  name: String,
  OHIPNumber: Number,
  responses: [Number], //TODO: replace with SDCQuestionResponse?,
});

// module.exports = mongoose.model("PatientID", PatientID);
module.exports = { PatientID };
