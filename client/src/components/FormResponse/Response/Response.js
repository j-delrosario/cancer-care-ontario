import React from "react";
import { Button, Modal } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

import "./Response.css";

import DeleteResponse from "./DeleteResponse/DeleteResponse";
import FormSection from "../FormSection/FormSection"
import FormQuestion from "../FormQuestion/FormQuestion"

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

  componentDidUpdate() {
    this.state.response = this.props.response;
    this.state.form = this.props.response.SDCForm;
  }

  handleCancelClick = () => {
    this.setState({
      response: undefined,
      form: undefined,
    });
  };

  handleEditClick = () => {
    this.props.resetTab(-1);
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
    this.props.reset();
  };

  renderActionButtons = () => {
    if (this.state.canEdit) {
      return (
        <div>
          <div className="action-buttons">
            <div className="left-buttons">
              <Link className="response-link" to="/form-filler">
                <Button
                  onClick={() => this.handleCancelClick()}
                  variant="contained"
                  color="secondary"
                >
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

  render() {
    return (
      <div>
        {" "}
        {this.state.response === undefined ? (
          ""
        ) : (
          <div>
            <h1>{this.props.response.SDCForm.title}</h1>
            <div className="flex-row">
              <div className="bold">URL: </div>
              <div className="side-margin">
                {window.location.protocol + window.location.host}/form-response/{this.props.response._id}
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
            {this.props.response.SDCForm.sections.map((section) => (
              <div key={section.id}>
                <FormSection
                  section={section}
                  updateIsFormValid={() => {return}}
                  readOnly={true}
                />
              </div>
            ))}
            <FormSection
                  section={{sections: [], questions: this.props.response.SDCForm.questions}}
                  updateIsFormValid={() => {return}}
                  readOnly={true}
            />
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
