var mongoose = require("mongoose");
const SDCQuestion = require("./SDCQuestion");
const DeleteObjectArray = require('../api/services/DeleteObjectArray');
var Schema = mongoose.Schema;

var SDCSectionSchema = new Schema({
    id: {type: String, required: true},
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

function autoPopulateSection(next) {
    this.populate('questions');
    this.populate('sections');
    next();
}

async function autoDeleteSection(next) {
    const docToDelete = await this.model.findOne(this.getQuery());

    await DeleteObjectArray(docToDelete.questions, SDCQuestion, "Question");
    console.log(docToDelete.sections)
    await DeleteObjectArray(docToDelete.sections, this.model, "Section");
    next();
}

SDCSectionSchema.pre('findOne', autoPopulateSection).pre('find', autoPopulateSection);
SDCSectionSchema.pre('deleteOne', autoDeleteSection);

module.exports = mongoose.model("SDCSection", SDCSectionSchema);