import React from "react";

import "./FormQuestion.css";

import MultipleChoice from "../FormQuestion/MultipleChoice/MultipleChoice";
import Text from "../FormQuestion/Text/Text";
import Int from "../FormQuestion/Int/Int";

import FormSection from "../FormSection/FormSection";

class FormQuestion extends React.Component {
  state = { sections: [], questions: [] };

  componentDidMount() {
    this.sortQuestions();
    this.setState({
      sections: this.props.question.sections,
    });
  }

  sortQuestions = () => {
    const sortedQuestions = this.props.question.questions.sort(function (a, b) {
      return a.orderNumber > b.orderNumber
        ? 1
        : b.orderNumber > a.orderNumber
        ? -1
        : 0;
    });
    this.setState({
      questions: sortedQuestions,
    });
  };

  isDisabled() {
    if (this.props.selected)
      return (
        this.props.question.selectionDisablesChildren && this.props.selected
      );
    else return false;
  }

  // Returns question based on question type
  renderQuestionType(question, readOnly) {
    if (question.questionBody.questionType === "MultipleChoice") {
      return (
        <MultipleChoice
          question={question.questionBody}
          maxSelections={question.maxSelections}
          choices={question.questionBody.choices}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
          clearResponse={this.props.clearResponse || this.isDisabled()}
          selected={this.props.selected}
          onUpdate={this.props.onUpdate}
        />
      );
    } else if (question.questionBody.questionType === "String") {
      return (
        <Text
          required={this.props.required}
          question={question.questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
          clearResponse={this.props.clearResponse}
          onUpdate={this.props.onUpdate}
        />
      );
    } else if (question.questionBody.questionType === "Int") {
      return (
        <Int
          question={question.questionBody}
          required={this.props.required}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
          clearResponse={this.props.clearResponse}
          onUpdate={this.props.onUpdate}
        />
      );
    }
  }

  render() {
    return (
      <div className="questionContainer">
        <div className="questionTitleContainer">
          <div className="questionTitle">
            {this.props.noTitle
              ? ""
              : this.props.question.questionBody.questionTitle}
          </div>
          <div className="questionText">
            {this.props.noTitle
              ? ""
              : this.props.question.questionBody.questionText}
          </div>
        </div>
        {this.renderQuestionType(this.props.question, this.props.readOnly)}
        {this.state.sections.map((section) => (
          <div key={section.id} className="subSectionContainer">
            <FormSection
              required={true}
              section={section}
              updateIsFormValid={this.updateIsFormValid}
              readOnly={this.props.readOnly || this.isDisabled()}
              clearResponse={this.props.clearResponse || this.isDisabled()}
              onUpdate={this.props.onUpdate}
            />
          </div>
        ))}
        {this.state.questions.map((question) => (
          <div key={question.id} className="subQuestionContainer">
            <FormQuestion
              required={true}
              question={question}
              updateIsFormValid={this.props.updateIsFormValid}
              readOnly={this.props.readOnly || this.isDisabled()}
              clearResponse={this.props.clearResponse || this.isDisabled()}
              onUpdate={this.props.onUpdate}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FormQuestion;
