import React from "react";
import "./FormSection.css";
import TrueFalse from "../Questions/TrueFalse/TrueFalse";
import MultipleChoice from "../Questions/MultipleChoice/MultipleChoice";
import Text from "../Questions/Text/Text";
import Int from "../Questions/Int/Int";
import CreatePatient from "../CreatePatient/CreatePatient";
import CreateFormFiller from "../CreateFormFiller/CreateFormFiller";
import Autocomplete from "@material-ui/lab/Autocomplete";
import axios from "axios";
import { Button, Modal, TextField } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";

class FormSection extends React.Component {
  state = {
    form:
      this.props.location.state !== undefined
        ? this.props.location.state.response.SDCForm
        : null, // check if form has been sent from edit
    procedures: [{ title: "Adrenal Gland" }],
    procedure:
      this.props.location.state !== undefined
        ? { title: "Adrenal Gland" } // TODO: Change when diagnostic prodecure name/title is captured
        : null,
    patients: [],
    patient:
      this.props.location.state !== undefined
        ? this.props.location.state.response.patient
        : null,
    formFillers: [],
    formFiller:
      this.props.location.state !== undefined
        ? this.props.location.state.response.formFiller
        : null,
    createPatientModalOpen: false,
    createFormFillerModalOpen: false,
    isFormValid: false,
    editMode: false,
    response:
      this.props.location.state !== undefined
        ? this.props.location.state.response
        : null,
    sdcForms: [],
  };
  componentDidMount() {
    console.log("this.props", this.props);
    console.log("this.state.form", this.state.form);

    // If a form has been sent in from clicking the edit button, then we are in edit mode
    console.log(this.props);
    if (this.props.location.state !== undefined) {
      this.setState({
        editMode: true,
      });
    }

    // Get list of forms, patients, and form fillers
    this.getSDCForms();
    this.getPatients();
    this.getFormFillers();
  }

  getSDCForms = () => {
    axios
      .get("http://localhost:3001/api/SDCForm/")
      .then((res) => {
        console.log(res.data);
        this.setState({
          sdcForms: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPatients = () => {
    axios
      .get("http://localhost:3001/api/Patient/patients")
      .then((res) => {
        this.setState({
          patients: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getFormFillers = () => {
    axios
      .get("http://localhost:3001/api/FormFiller/formFillers")
      .then((res) => {
        this.setState({
          formFillers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleProcedureChange = (event, input) => {
    if (input == null) {
      this.setState({ form: null });
    } else {
      this.setState({ form: input });
    }
  };

  onPatientChange = (event, input) => {
    this.setState({
      patient: input,
    });
  };

  onFormFillerChange = (event, input) => {
    this.setState({
      formFiller: input,
    });
  };

  canSubmit = () => {
    // return this.state.patient !== null && this.state.isFormValid;
    return this.state.patient !== null;
  };

  handleSubmit = () => {
    axios
      .post("http://localhost:3001/api/SDCFormResponse/responses/", {
        patient: this.state.patient,
        SDCForm: this.state.form,
        formTitle: this.state.form.title,
        formFiller: this.state.formFiller,
      })
      .then((res) => {
        console.log("form submitted");

        // Open success message
        const message = (
          <div>
            <h2>Response submitted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
        this.props.history.push("/"); // Go to homepage
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleUpdate = () => {
    axios
      .put(
        "http://localhost:3001/api/SDCFormResponse/responses/" +
          this.state.response._id,
        {
          patient: this.state.patient,
          SDCForm: this.state.form,
          formTitle: this.state.form.title,
          formFiller: this.state.formFiller,
        }
      )
      .then((res) => {
        console.log("form updated");
        // Open success message
        const message = (
          <div>
            <h2>Response updated!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
        this.props.history.push("/"); // Go to homepage
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderSubmitButton = () => {
    if (this.state.editMode) {
      return (
        <Button
          onClick={() => this.handleUpdate()}
          variant="contained"
          color="primary"
          disabled={!this.canSubmit()}
        >
          Update
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => this.handleSubmit()}
          variant="contained"
          color="primary"
          disabled={!this.canSubmit()}
        >
          Submit
        </Button>
      );
    }
  };

  renderForm = () => {
    if (this.state.form !== null) {
      return (
        <div>
          <div className="patient-container">
            <Autocomplete
              className="autocomplete"
              required
              noOptionsText={
                <Button
                  onMouseDown={() => this.handleCreatePatientModalOpen()}
                  variant="contained"
                >
                  Add New Patient
                </Button>
              }
              value={this.state.patient}
              onChange={this.onPatientChange}
              options={this.state.patients}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose patient"
                  variant="outlined"
                />
              )}
            />
            <div className="or">-- OR --</div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleCreatePatientModalOpen()}
            >
              Add New Patient
            </Button>
          </div>
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
            <Link to="/">
              <Button variant="contained" color="secondary">
                Cancel
              </Button>
            </Link>
            {this.renderSubmitButton()}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  // TODO: Add other types of questions
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
          updateIsFormValid={this.updateIsFormValid}
        />
      );
    } else if (questionBody.questionType == "String") {
      return (
        <Text
          required={true}
          question={questionBody}
          updateIsFormValid={this.updateIsFormValid}
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

  updateIsFormValid = (value) => {
    this.setState({
      isFormValid: value,
    });
  };

  handleCreatePatientModalOpen = () => {
    this.setState({
      createPatientModalOpen: true,
    });
  };

  handleCreatePatientModalClose = () => {
    this.setState({
      createPatientModalOpen: false,
    });
  };

  handleCreateFormFillerModalOpen = () => {
    this.setState({
      createFormFillerModalOpen: true,
    });
  };

  handleCreateFormFillerModalClose = () => {
    this.setState({
      createFormFillerModalOpen: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <Autocomplete
            className="autocomplete"
            required
            noOptionsText={
              <Button
                onMouseDown={() => this.handleCreateFormFillerModalOpen()}
                variant="contained"
              >
                Add New Form Filler
              </Button>
            }
            value={this.state.formFiller}
            onChange={this.onFormFillerChange}
            options={this.state.formFillers}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Form Filler" variant="outlined" />
            )}
          />
          <Autocomplete
            value={this.state.form}
            className="autocomplete"
            onChange={this.handleProcedureChange}
            options={this.state.sdcForms}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose Form" variant="outlined" />
            )}
          />
          {this.renderForm()}
        </div>
        <Modal
          open={this.state.createPatientModalOpen}
          onClose={this.handleCreatePatientModalClose}
          className="create-patient-modal"
        >
          <CreatePatient
            closeModal={this.handleCreatePatientModalClose}
            reloadPatients={this.getPatients}
          />
        </Modal>
        <Modal
          open={this.state.createFormFillerModalOpen}
          onClose={this.handleCreateFormFillerModalClose}
          className="create-patient-modal"
        >
          <CreateFormFiller
            closeModal={this.handleCreateFormFillerModalClose}
            reloadFormFillers={this.getFormFillers}
          />
        </Modal>
      </div>
    );
  }
}

export default withRouter(FormSection);
