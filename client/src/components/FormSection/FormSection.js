import React from "react";
import MultipleChoice from "../Questions/MultipleChoice/MultipleChoice";
import Text from "../Questions/Text/Text";
import Int from "../Questions/Int/Int";
import TrueFalse from "../Questions/TrueFalse/TrueFalse";

class FormSection extends React.Component {
  state = { questions: [] };

  componentDidMount() {
    this.sortQuestions();
  }

  //   componentDidUpdate() {
  //     this.sortQuestions();
  //   }

  sortQuestions = () => {
    const sortedQuestions = this.props.section.questions.sort(function (a, b) {
      return a.orderNumber > b.orderNumber
        ? 1
        : b.orderNumber > a.orderNumber
        ? -1
        : 0;
    });
    this.setState(
      {
        questions: sortedQuestions,
      },
      console.log("questions: ", sortedQuestions)
    );
  };

  // Returns question based on question type
  renderQuestionType(questionBody) {
    if (questionBody.questionType == "TrueFalse") {
      return <TrueFalse />;
    } else if (questionBody.questionType == "MultipleChoice") {
      // Check to see if radio, otherwise it is checkbox
      return (
        <MultipleChoice
          isRadio={"is_radio" in questionBody ? questionBody.is_radio : false}
          choices={questionBody.choices}
          question={questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
        />
      );
    } else if (questionBody.questionType == "String") {
      return (
        <Text
          required={true}
          question={questionBody}
          updateIsFormValid={this.props.updateIsFormValid}
        />
      );
    } else if (questionBody.questionType == "Int") {
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
      <div>
        <div className="sectionTitleContainer">
          <div className="sectionTitle">{this.props.section.title}</div>
          <div className="sectionText">{this.props.section.sectionText}</div>
        </div>
        {this.state.questions.map((question) => (
          <div key={question.id} className="questionContainer">
            <div className="questionTitle">
              {question.questionBody.questionTitle}
            </div>
            <div className="questionText">
              {question.questionBody.questionText}
            </div>

            {this.renderQuestionType(question.questionBody)}
          </div>
        ))}
      </div>
    );
  }
}

export default FormSection;
