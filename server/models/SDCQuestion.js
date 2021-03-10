var mongoose = require("mongoose");
var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
const SDCSection = require("./SDCSection");
var Schema = mongoose.Schema;

var SDCQuestionSchema = new Schema({
    id: {type: Number, required: true},
    orderNumber: {type: Number, required: true},
    selectionDisablesChildren: Boolean,
    selectionDeselectsSiblings: Boolean,
    questionBody: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCQuestionBody"
    },
    questions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCQuestion",
    }],
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCSection",
    }],
});

module.exports = mongoose.model("SDCQuestion", SDCQuestionSchema);