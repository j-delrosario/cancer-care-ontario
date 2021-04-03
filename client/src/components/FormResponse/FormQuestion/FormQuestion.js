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
    this.setState(
      {
        sections: this.props.question.sections,
      },
    );
  }

  sortQuestions = () => {
    const sortedQuestions = this.props.question.questions.sort(function (a, b) {
      return a.orderNumber > b.orderNumber ?  1 :
             b.orderNumber > a.orderNumber ? -1 : 0;
    });
    this.setState(
      {
        questions: sortedQuestions,
      },
    );
  };

  // Returns question based on question type
  renderQuestionType(question, readOnly) {
    if (question.questionBody.questionType === "MultipleChoice") {
      return (
        <MultipleChoice
          maxSelections={question.maxSelections}
          choices={question.questionBody.choices}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
        />
      );
    } else if (question.questionBody.questionType === "String") {
      return (
        <Text
          required={true}
          question={question.questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
        />
      );
    } else if (question.questionBody.questionType === "Int") {
      console.log(readOnly)
      return (
        <Int
          question={question.questionBody}
          required={true}
          updateIsFormValid={this.props.updateIsFormValid}
          readOnly={readOnly}
        />
      );
    }
  }

  render() {
    return (
      <div className="questionContainer">
            <div className="questionTitleContainer">
                <div className="questionTitle">{this.props.noTitle ? "" : this.props.question.questionBody.questionTitle}</div>
                <div className="questionText">{this.props.noTitle ? "" : this.props.question.questionBody.questionText}</div>
            </div>
        {this.renderQuestionType(this.props.question, this.props.readOnly)}
        {this.state.sections.map((section) => (
            <div key={section.id}>
              <FormSection
                section={section}
                updateIsFormValid={this.updateIsFormValid}
                readOnly={this.props.readOnly}
              />
            </div>
        ))}
        {this.state.questions.map((question) => (
            <div key={question.id}>
              <FormQuestion
                question={question}
                updateIsFormValid={this.props.updateIsFormValid}
                readOnly={this.props.readOnly}
              />
            </div>
        ))}

      </div>
    );
  }
}

export default FormQuestion;
