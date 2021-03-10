const xml2js = require('xml2js');
const models = require("../models");

var __UploadSDCFormStack = {
    MultipleChoiceQuestionBodyModels: []
};
/* converts XML string to JSON string */
function xmlToJson(xml) {
    xml2js.parseString(xml(),  (err, result) => {
        try {
            json = JSON.stringify(result, null, 2);
        }
        catch (err) {
            console.log(err);
            json = null;
        };
    });
    return json;
}

function ListItemHasDependencies(item) {
    if (item.ChildItems)
        return true;
    return false;
}

function TypeOfListItem(item) {
    if (item.ListItemResponseField) {
        if (item.ListItemResponseField[0].Response[0].string) {
            return "String";
        }
        if (item.ListItemResponseField[0].Response[0].integer ||
            item.ListItemResponseField[0].Response[0].decimal) {
            return "Int";
        }
    } else {
        return "NoResponse";
    }
}

function TypeofQuestion(question) {
    if (question.ListField) {
        return "MultipleChoice";
    }

    if (question.ResponseField) {
        if (question.ResponseField[0].Response[0].string) {
            return "String";
        }
        if (question.ResponseField[0].Response[0].integer ||
            question.ResponseField[0].Response[0].decimal) {
            return "Int";
        }
    }
}

async function SaveModel(model) {
    let validatedModel = model.validateSync();
    if (!!validatedModel)
        return false;
    try {
        await model.save();
    } catch(err) {
        if (String(err).slice(0,17) != "ParallelSaveError") {
            console.log(err);
        }
        return false;
    }
    return true;
}

function AddSectionsToModel(model, sectionList, tab="") {
    sectionList.forEach( (section) => {
        console.log(tab + "Creating section with id " + section.$.ID);
        sectionModel = new models.SDCSection({id: section.$.ID});
        if (section.$.title)
            sectionModel.title = section.$.title;
        if (section.Property && section.Property[0].$ && section.Property[0].$.val)
            sectionModel.sectionText = section.Property[0].$.val;
        AddDependenciesToModel(sectionModel, section, tab+"  ");
        SaveModel(sectionModel);
        model.sections.push(sectionModel);
    });
}

function AddQuestionBodyToModel(model, question) {
    if (question.$.title)
        model.questionTitle = question.$.title;
    if (question.Property && question.Property[0].$.val)
        model.questionText = question.Property[0].$.val;
}

function AddIntQuestionBodyToModel(model, question, responseField) {
    AddQuestionBodyToModel(model, question);
    if (responseField[0].ResponseUnits && responseField[0].ResponseUnits[0]) {
        if (responseField[0].ResponseUnits[0].$.unitSystem)
            model.unitSystem = responseField[0].ResponseUnits[0].$.unitSystem;
        if (responseField[0].ResponseUnits[0].$.val)
            model.units = responseField[0].ResponseUnits[0].$.val;
        if (responseField[0].Response[0].integer) {
            if (responseField[0].Response[0].integer.minInclusive)
                model.min = parseInt(responseField[0].Response[0].integer.minInclusive);
            if (responseField[0].Response[0].integer.maxInclusive)
                model.max = parseInt(responseField[0].Response[0].integer.maxInclusive);
        }
        if (responseField[0].Response[0].decimal) {
            if (responseField[0].Response[0].decimal.minInclusive)
                model.min = parseFloat(responseField[0].Response[0].decimal.minInclusive);
            if (responseField[0].Response[0].decimal.maxInclusive)
                model.max = parseFloat(responseField[0].Response[0].decimal.maxInclusive);
        }
    }
}

function AddStringQuestionBodyToModel(model, question) {
    AddQuestionBodyToModel(model, question);
}

function AddMultipleChoiceQuestionBodyToModel(model, question, tab="") {
    AddQuestionBodyToModel(model, question);
    if (question.ListField[0].$.maxSelections == 1)
        model.isRadio = true;
    question.ListField[0].List[0].ListItem.forEach( (listItem) => {
        let multipleChoiceModel = multipleChoiceBodyModel = null;
        console.log(tab + "Creating Multiple Choice option as " + TypeOfListItem(listItem) + " Question with ID: " + listItem.$.ID + " and Order #: " + listItem.$.order);
        multipleChoiceModel = new models.SDCQuestion({id: listItem.$.ID, orderNumber: listItem.$.order});

        if (listItem.$.selectionDisablesChildren)
            multipleChoiceModel.selectionDisablesChildren = true;
        if (listItem.$.selectionDeselectsSiblings)
            multipleChoiceModel.selectionDeselectsSiblings = true;

        switch (TypeOfListItem(listItem)) {
            case "Int":
                multipleChoiceBodyModel = new models.IntQuestionBody({})
                AddIntQuestionBodyToModel(multipleChoiceBodyModel, listItem, listItem.ListItemResponseField);
                break;
            case "String":
                multipleChoiceBodyModel = new models.StringQuestionBody({});
                AddStringQuestionBodyToModel(multipleChoiceBodyModel, listItem);
                break;
            case "NoResponse":
                multipleChoiceBodyModel = new models.NoResponseQuestionBody({});
                AddNoResponseQuestionBodyToModel(multipleChoiceBodyModel, listItem);
                break;
            default:
                multipleChoiceBodyModel = new models.SDCQuestionBody({});
                break;
        }
        SaveModel(multipleChoiceBodyModel);

        multipleChoiceModel.questionBody = multipleChoiceBodyModel;

        model.choices.push(multipleChoiceModel);
        if (ListItemHasDependencies(listItem)) {
            AddDependenciesToModel(multipleChoiceModel, listItem, tab+"  ")
        }
        SaveModel(multipleChoiceModel)
    });
}

function AddNoResponseQuestionBodyToModel(model, question) {
    AddQuestionBodyToModel(model, question);
}

function AddQuestionsToModel(model, questionList, tab="") {

    questionList.forEach( (question) => {
        let questionModel = questionBodyModel = validatedModel = null;
        console.log(tab + "Creating " + TypeofQuestion(question) + " Question with ID: " + question.$.ID + " and Order #: " + question.$.order);
        questionModel = new models.SDCQuestion({id: question.$.ID, orderNumber: question.$.order});

        switch (TypeofQuestion(question)) {
            case "Int":
                questionBodyModel = new models.IntQuestionBody({});
                AddIntQuestionBodyToModel(questionBodyModel, question, question.ResponseField)
                SaveModel(questionBodyModel);
                break;
            case "String":
                questionBodyModel = new models.StringQuestionBody({});
                AddStringQuestionBodyToModel(questionBodyModel, question);
                SaveModel(questionBodyModel);
                break;
            case "MultipleChoice":
                questionBodyModel = new models.MultipleChoiceQuestionBody({});
                __UploadSDCFormStack.MultipleChoiceQuestionBodyModels.push(questionBodyModel);
                AddMultipleChoiceQuestionBodyToModel(questionBodyModel, question, tab);
                questionBodyModel = __UploadSDCFormStack.MultipleChoiceQuestionBodyModels.pop();
                SaveModel(questionBodyModel);
                break;
            default:
                questionBodyModel = new models.SDCQuestionBody({});
                SaveModel(questionBodyModel);
                break;
        }
        if (question.$.title)
            questionBodyModel.title = question.$.title;

        questionModel.questionBody = questionBodyModel;
        model.questions.push(questionModel);

        AddDependenciesToModel(questionModel, question, tab+"  ");
        SaveModel(questionModel);
    });
}

// Adds dependent models from the given JSON SDC form to model
function AddDependenciesToModel(model, form, tab="") {

    console.log(tab + "Adding Dependencies to model");

    let childItems = sectionList = questionList = null;
    if (form.hasOwnProperty("ChildItems")) {
        childItems = form.ChildItems[0];
        console.log(tab + "Dependent Child Items found");
    }

    if (childItems && childItems.hasOwnProperty("Section")) {
        sectionList = childItems.Section;
        console.log(tab + "Dependent Sections found");
    }

    if (sectionList) {
        AddSectionsToModel(model, sectionList, tab);
    }

    if (childItems && childItems.hasOwnProperty("Question")) {
        questionList = childItems.Question;
        console.log(tab + "Dependent Questions found");
    }

    if (questionList) {
        AddQuestionsToModel(model, questionList, tab);

    }
}

module.exports = (xmlStr) => {
    let json = JSON.parse(xmlToJson(xmlStr));
    const fs = require("fs");
    var writeStream = fs.createWriteStream('./output');
    writeStream.write(JSON.stringify(json));
    let procedureIDModel = new models.DiagnosticProcedureID({});
    let formModel = new models.SDCForm({});

    if (json.hasOwnProperty("FormDesign")){
        formDesign = json.FormDesign;
        //TODO: find out what ID to use for this
        procedureIDModel.id = 100.00;
        formModel.id = formDesign.$.ID;
        formModel.diagnosticProcedure = procedureIDModel;
        formModel.version = formDesign.$.
        if (formDesign.$.formTitle)
            formModel.title = formDesign.$.formTitle;
        console.log("Form Design found");
    }
    SaveModel(procedureIDModel);

    if (formDesign && formDesign.hasOwnProperty("Body")){
        formBody = formDesign.Body[0];
        console.log("Form Body found");
    }
    if (formBody) {
        AddDependenciesToModel(formModel, formBody);
        console.log("Form Model Created");
    }
    SaveModel(formModel);
}
