var mongoose = require("mongoose");
const SDCQuestionBody = require("./SDCQuestionBody");
const SDCSection = require("./SDCSection");
const DeleteObjectArray = require('../services/DeleteObjectArray');
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

function autoPopulateQuestion(next) {
    this.populate('questionBody');
    this.populate('questions');
    this.populate('sections');
    next();
}

async function autoDeleteQuestion(next) {
    const docToDelete = await this.model.findOne(this.getQuery());

    await DeleteObjectArray(docToDelete.questions, this.model, "Question");
    await DeleteObjectArray(docToDelete.sections, SDCSection, "Section");

    if (docToDelete.questionBody) {
        questionTypeStr = docToDelete.questionBody.questionType ? docToDelete.questionBody.questionType : "";
        await DeleteObjectArray([docToDelete.questionBody], SDCQuestionBody, questionTypeStr + " QuestionBody");

        if (docToDelete.questionBody.choices) {
            await DeleteObjectArray(docToDelete.questionBody.choices, this.model, "Question");
        }
    }
    next();
}

SDCQuestionSchema.pre('findOne', autoPopulateQuestion).pre('find', autoPopulateQuestion);
SDCQuestionSchema.pre('deleteOne', autoDeleteQuestion);

module.exports = mongoose.model("SDCQuestion", SDCQuestionSchema);