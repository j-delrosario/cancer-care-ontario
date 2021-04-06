import React from "react";

import "./FormSection.css";

import MultipleChoice from "../FormQuestion/MultipleChoice/MultipleChoice";
import Text from "../FormQuestion/Text/Text";
import Int from "../FormQuestion/Int/Int";

import FormQuestion from "../FormQuestion/FormQuestion";

class FormSection extends React.Component {
  state = { sections: [], questions: [] };

  componentDidMount() {
    this.sortQuestions();
    this.setState({
      sections: this.props.section.sections,
    });
  }



  sortQuestions = () => {
    const sortedQuestions = this.props.section.questions.sort(function (a, b) {
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
              required={true}
              section={section}
              updateIsFormValid={this.props.updateIsFormValid}
              readOnly={this.props.readOnly}
              onUpdate={this.props.onUpdate}
            />
          </div>
        ))}
        {this.state.questions.map((question) => (
          <div key={question.id} className="sectionQuestionContainer">
            <FormQuestion
              required={true}
              question={question}
              updateIsFormValid={this.props.updateIsFormValid}
              readOnly={this.props.readOnly}
              onUpdate={this.props.onUpdate}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default FormSection;
