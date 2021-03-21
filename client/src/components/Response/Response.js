import React from "react";
import { Button, Modal } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import IntResponse from "../Responses/IntResponse/IntResponse";
import TextResponse from "../Responses/TextResponse/TextResponse";
import MultipleChoiceResponse from "../Responses/MultipleChoiceResponse/MultipleChoiceResponse";

import "./Response.css";
import DeleteResponse from "../DeleteResponse/DeleteResponse";

class Response extends React.Component {
  state = {
    form: this.props.response.SDCForm,
    deleteModalOpen: false,
  };

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

  handleEditClick = () => {
    this.props.resetTab();
    this.props.history.push({
      pathname: "/form-filler",
      // search: '?query=abc',
      state: { response: this.props.response },
    });
  };

  // ------ Modal -------
  handleDeleteModalOpen = () => {
    this.setState({
      deleteModalOpen: true,
    });
  };

  handleDeleteModalClose = () => {
    this.setState({
      deleteModalOpen: false,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.form.title}</h1>
        {this.state.form.questions.map((question) => (
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
          <div className="left-buttons">
            <Link className="response-link" to="/">
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
            <Button
              onClick={() => this.handleDeleteModalOpen()}
              className="response-link"
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          </div>
          <Button
            onClick={() => this.handleEditClick()}
            className="response-link"
            variant="contained"
            color="primary"
          >
            Edit
          </Button>
        </div>
        <Modal
          open={this.state.deleteModalOpen}
          onClose={this.handleDeleteModalClose}
          className="create-patient-modal"
        >
          <DeleteResponse
            response={this.props.response}
            closeModal={this.handleDeleteModalClose}
            reset={this.props.reset}
            appState={this.props.appState}
          />
        </Modal>
      </div>
    );
  }
}

export default withRouter(Response);
