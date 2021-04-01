import React from "react";
import { Link, withRouter } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, Modal, TextField } from "@material-ui/core";
import axios from "axios";

import "./CreateEditForm.css";

import CreatePatient from "../../FormFiller/Patients/CreatePatient";
import CreateFormFiller from "../../FormFiller/FormFillers/CreateFormFiller";
import FormSection from "../FormSection/FormSection";

class CreateEditForm extends React.Component {
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
    // If a form has been sent in from clicking the edit button, then we are in edit mode
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
      .get("/api/SDCForm/")
      .then((res) => {
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
      .get("/api/Patient/patients")
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
      .get("/api/FormFiller/formFillers")
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
      console.log(input);
      input.sections.map((section) => {console.log(section); return 0})

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
    return this.state.patient !== null && this.state.formFiller !== null;
  };

  handleSubmit = () => {
    axios
      .post("/api/SDCFormResponse/responses/", {
        patient: this.state.patient,
        SDCForm: this.state.form,
        formTitle: this.state.form.title,
        formFiller: this.state.formFiller,
      })
      .then((res) => {
        console.log(res.data._id); // url
        let url = res.data._id;
        console.log("form submitted");

        // Open success message
        const message = (
          <div>
            <h2>Response submitted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
        this.props.history.push(`/form-response/${url}`); // Go to form response page
      })
      .catch((err) => {
        console.log(err);

        // Open error message
        const message = (
          <div>
            <h2>Response not submitted</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  handleUpdate = () => {
    axios
      .put("/api/SDCFormResponse/responses/" + this.state.response._id, {
        patient: this.state.patient,
        SDCForm: this.state.form,
        formTitle: this.state.form.title,
        formFiller: this.state.formFiller,
      })
      .then((res) => {
        console.log("form updated");
        // Open success message
        const message = (
          <div>
            <h2>Response updated!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
        // this.props.history.push("/"); // Go to homepage
        this.props.history.push(`/form-response/${this.state.response._id}`); // Go to form response page
      })
      .catch((err) => {
        console.log(err);

        // Open error message
        const message = (
          <div>
            <h2>Response not updated</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
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
          <div className="formSectionContainer">
          {this.state.form.sections.map((section) => (
            <div key={section.id}>
              <FormSection
                section={section}
                updateIsFormValid={this.updateIsFormValid}
              />
            </div>
          ))}
          <FormSection
            section={{ sections: [], questions: this.state.form.questions }}
            updateIsFormValid={this.updateIsFormValid}
          />
          </div>
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

  // // Returns question based on question type
  // renderQuestionType(questionBody) {
  //   if (questionBody.questionType == "TrueFalse") {
  //     return <TrueFalse />;
  //   } else if (questionBody.questionType == "MultipleChoice") {
  //     // Check to see if radio, otherwise it is checkbox
  //     return (
  //       <MultipleChoice
  //         isRadio={"is_radio" in questionBody ? questionBody.is_radio : false}
  //         choices={questionBody.choices}
  //         question={questionBody}
  //         updateIsFormValid={this.updateIsFormValid}
  //       />
  //     );
  //   } else if (questionBody.questionType == "String") {
  //     return (
  //       <Text
  //         required={true}
  //         question={questionBody}
  //         updateIsFormValid={this.updateIsFormValid}
  //       />
  //     );
  //   } else if (questionBody.questionType == "Int") {
  //     return (
  //       <Int
  //         question={questionBody}
  //         required={true}
  //         updateIsFormValid={this.props.updateIsFormValid}
  //       />
  //     );
  //   }
  // }

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
            appState={this.props.appState}
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
            appState={this.props.appState}
          />
        </Modal>
      </div>
    );
  }
}

export default withRouter(CreateEditForm);
