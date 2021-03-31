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
    response: this.props.response,
    form: this.props.response.SDCForm,
    deleteModalOpen: false,
    canEdit: this.props.canEdit !== undefined ? this.props.canEdit : false,
  };

  componentDidMount() {
    console.log("props", this.props);
    // If coming from the FormFiller page then canEdit is true
    if (
      this.props.location.state !== undefined &&
      this.props.location.state.fromFormFiller
    ) {
      this.setState({
        canEdit: true,
      });
    }
  }
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

  renderActionButtons = () => {
    if (this.state.canEdit) {
      return (
        <div>
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
        </div>
      );
    }
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
        {" "}
        {this.props.response === undefined ? (
          ""
        ) : (
          <div>
            <h1>{this.props.response.SDCForm.title}</h1>
            <div className="flex-row">
              <div className="bold">URL: </div>
              <div className="side-margin">
                form-response/{this.props.response._id}
              </div>
            </div>
            <div className="patient-filler-container">
              <div className="patient-filler">
                <div className="bold">Patient:</div>
                <div>{this.props.response.patient.name}</div>
              </div>
              <div className="patient-filler">
                <div className="bold">Form Filler:</div>
                <div>{this.props.response.formFiller.name}</div>
              </div>
            </div>
            {this.props.response.SDCForm.questions.map((question) => (
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
            {this.props.response.SDCForm.sections.map((section) => (
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
            {this.renderActionButtons()}
          </div>
        )}
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
