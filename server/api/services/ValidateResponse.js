function getQuestionTitle(question) {
    return question.questionBody.questionTitle ? question.questionBody.questionTitle : question.questionBody.questionText;
}

function validateQuestionBody(question) {
    let questionBody = question.questionBody;

    if (!questionBody.questionType === "NoResponse" && questionBody.answer === undefined)
        return [getQuestionTitle(question)];

    let invalidElements = [];
    if (questionBody.questionType === "String") {
        if (!(typeof questionBody.answer === 'string' || questionBody.answer instanceof String) || questionBody.answer === "")
            invalidElements.push(getQuestionTitle(question));
    } else if (questionBody.questionType === "Int") {
        if (isNaN(questionBody.answer) || questionBody.answer === "")
            invalidElements.push(getQuestionTitle(question));
    } else if (questionBody.questionType === "MultipleChoice") {
        let checked = 0;
        let maxSelections = question.maxSelections === 0 ? questionBody.choices.length : parseInt(question.maxSelections);
        let disablesChildren = 0;
        questionBody.choices.forEach(choice => {
            if (choice.checked) {
                if (choice.selectionDeselectsSiblings)
                    maxSelections = 1;
                if (!choice.selectionDisablesChildren)
                if (validateQuestion(choice).length > 0){
                    invalidElements.push(getQuestionTitle(question));
                    Array.prototype.push.apply(invalidElements, validateQuestion(choice));
                }
                checked++;
            } else if (!choice.checked && choice.selectionDisablesChildren) {
                if (validateQuestion(choice).length > 0) {
                    invalidElements.push(getQuestionTitle(question));
                    Array.prototype.push.apply(invalidElements, validateQuestion(choice));
                }
                disablesChildren++;
            }
        })
        if ((checked === 0 && (disablesChildren !== questionBody.choices.length)) || checked > maxSelections) {
            invalidElements.push(getQuestionTitle(question));
        }
    }
    return invalidElements;
}

function validateQuestion(question) {
    let invalidElements = [];
    if (question.questionBody) {
        Array.prototype.push.apply(invalidElements, validateQuestionBody(question));
    }
    question.sections.forEach(section => {
        Array.prototype.push.apply(invalidElements, validateSection(section))
    });
    question.questions.forEach(question => {
        Array.prototype.push.apply(invalidElements, validateQuestion(question))
    });

    return invalidElements;
}

function validateSection(section) {
    let invalidElements = [];
    section.sections.forEach(section => {
        Array.prototype.push.apply(invalidElements, validateSection(section))
    });

    section.questions.forEach(question => {
        Array.prototype.push.apply(invalidElements, validateQuestion(question))
    });
    return invalidElements;
}

module.exports = (form) => {
    let invalidElements = [];
    form.sections.forEach(section => {
        Array.prototype.push.apply(invalidElements, validateSection(section))
    });
    form.questions.forEach(question => {
        Array.prototype.push.apply(invalidElements, validateQuestion(question))
    });
    return invalidElements;
}