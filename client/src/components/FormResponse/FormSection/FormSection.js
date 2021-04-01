import React from "react";

import "./FormSection.css";

import MultipleChoice from "../FormQuestion/MultipleChoice/MultipleChoice";
import Text from "../FormQuestion/Text/Text";
import Int from "../FormQuestion/Int/Int";

import FormQuestion from "../FormQuestion/FormQuestion"

class FormSection extends React.Component {
  state = { sections: [], questions: [] };

  componentDidMount() {
    this.sortQuestions();
    this.setState(
      {
        sections: this.props.section.sections,
      },
    );
  }

  sortQuestions = () => {
    const sortedQuestions = this.props.section.questions.sort(function (a, b) {
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
  renderQuestionType(questionBody) {
    if (questionBody.questionType === "MultipleChoice") {
      return (
        <MultipleChoice
          isRadio={questionBody.selectionDeselectsSiblings}
          choices={questionBody.choices}
          question={questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
        />
      );
    } else if (questionBody.questionType === "String") {
      return (
        <Text
          required={true}
          question={questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
        />
      );
    } else if (questionBody.questionType === "Int") {
      return (
        <Int
          question={questionBody}
          required={true}
          updateIsFormValid={this.props.updateIsFormValid}
        />
      );
    }
  }

  render() {
    return (
      <div className="sectionContainer">
        <div className="sectionTitleContainer">
          <div className="sectionTitle">{this.props.section.title}</div>
          <div className="sectionText">{this.props.section.sectionText}</div>
        </div>
        {this.state.sections.map((section) => (
            <div key={section.id}>
              <FormSection
                section={section}
                updateIsFormValid={this.props.updateIsFormValid}
              />
            </div>
        ))}
        {this.state.questions.map((question) => (
          <div key={question.id} className="sectionQuestionContainer">
            <FormQuestion
              question={question}
              updateIsFormValid={this.props.updateIsFormValid}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FormSection;
