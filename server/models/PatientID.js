var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PatientID = new Schema({
    id: {type: Number, required: true},
    name: String,
    OHIPNumber: Number,
    // Mongo was complaining about the below line so I commented it out
    //responses: Array[Number], //TODO: replace with SDCQuestionResponse?,
    });

module.exports = mongoose.model("PatientID", PatientID);