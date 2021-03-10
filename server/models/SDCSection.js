var mongoose = require("mongoose");
const SDCQuestion = require("./SDCQuestion");
var Schema = mongoose.Schema;

var SDCSectionSchema = new Schema({
    id: {type: Number, required: true},
    title: String,
    sectionText: String,
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCQuestion",
    }],
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCSection",
    }],
});

module.exports = mongoose.model("SDCSection", SDCSectionSchema);