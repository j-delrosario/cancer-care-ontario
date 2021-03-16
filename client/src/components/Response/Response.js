import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import IntResponse from "../Responses/IntResponse/IntResponse";
import TextResponse from "../Responses/TextResponse/TextResponse";
import MultipleChoiceResponse from "../Responses/MultipleChoiceResponse/MultipleChoiceResponse";

class Response extends React.Component {
  state = { form: this.props.response.form };

  renderQuestionType(questionBody) {
    if (questionBody.questionType == "MultipleChoice") {
      // Check to see if radio, otherwise it is checkbox
      return (
        <MultipleChoiceResponse
          isRadio={"is_radio" in questionBody ? questionBody.is_radio : false}
          choices={questionBody.choices}
          question={questionBody}
        />
      );
    } else if (questionBody.questionType == "String") {
      return <TextResponse question={questionBody} />;
    } else if (questionBody.questionType == "Int") {
      return <IntResponse question={questionBody} />;
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.form.title}</h1>
        {this.state.form.sections.map((section) => (
          <div key={section.id}>
            <div className="sectionTitleContainer">
              <div className="sectionTitle">{section.title}</div>
              <div className="sectionText">{section.sectionText}</div>
            </div>
            {section.questions.map((question) => (
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
        ))}
        <div className="action-buttons">
          <Link to="/">
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Link>
          <Button
            //   onClick={() => this.handleSubmit()}
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </div>
      </div>
    );
  }
}

export default Response;
