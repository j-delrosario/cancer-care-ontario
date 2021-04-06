import React from "react";
import { Link, withRouter } from "react-router-dom";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, CardContent, Modal, TextField, Card } from "@material-ui/core";
import axios from "axios";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import "./CreateEditForm.css";

import CreatePatient from "../../FormFiller/Patients/CreatePatient";
import CreateFormFiller from "../../FormFiller/FormFillers/CreateFormFiller";
import FormSection from "../FormSection/FormSection";

class CreateEditForm extends React.Component {
  state = {
    createdForm: false,
    form:
      this.props.location.state !== undefined
        ? this.props.location.state.response.SDCForm
        : null, // check if form has been sent from edit
    procedures: [{ title: "Adrenal Gland" }],
    procedure:
      this.props.location.state !== undefined
        ? this.props.location.state.response.SDCForm.diagnosticProcedure.id
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
    formSubmittedModalOpen: false,
    formId: 0,
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
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    if (this.state.patient != null && this.state.formFiller != null && this.state.form != null) {
      if (!this.state.editMode && !this.state.createdForm) {
        let response = {
          patient: this.state.patient,
          SDCForm: this.state.form,
          formTitle: this.state.form.title,
          formFiller: this.state.formFiller,
          submitted: false,
        }
        axios.post("/api/SDCFormResponse/responses/", response).then((res) => {
          this.setState({
            response: res.data,
            createdForm: true,
          })
        }).catch((err) => {console.log(err)})
      }
    }
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
      this.setState({ form: input, createdForm: false });
    }
  };

  onPatientChange = (event, input) => {
    this.setState({
      patient: input, createdForm: false
    });
  };

  onFormFillerChange = (event, input) => {
    this.setState({
      formFiller: input, createdForm: false
    });
  };

  canSubmit = () => {
    // return this.state.patient !== null && this.state.isFormValid;
    return this.state.patient !== null && this.state.formFiller !== null;
  };

  checkIfFormIsValid = () => {
    for (let i = 0; this.state.form.sections; i++) {
      for (let j = 0; this.state.form.sections[i].questions; i++) {
        console.log(
          "this.state.form.sections[i].questions[j]",
          this.state.form.sections[i].questions[j]
        );
        console.log(
          "this.state.form.sections[i].questions[j].questionBody.isValid: ",
          this.state.form.sections[i].questions[j].questionBody.isValid
        );
        if (
          this.state.form.sections[i].questions[j].questionBody.isValid ==
            undefined ||
          this.state.form.sections[i].questions[j].questionBody.isValid == false
        ) {
          console.log(
            "please fill out: ",
            this.state.form.sections[i].questions[j].questionBody.questionTitle
          );
          return false;
        }
      }
    }
    return true;
  };

  messageOnSubmit = (messageText, type, questions=[]) => {
    let qs = questions.map((question) => {
       return (<div><h3 style={{display:"inline"}}>{question}<br></br></h3></div>)
    });
    const message = (
      <div>
        <h2>{messageText}</h2>
        {questions.length === 0 ? "" : qs}
      </div>
    );
    this.props.appState.handleOpenSnackbarMessage(type, message);
  }

  async validateResponse(response) {
    let res = await axios.post("/api/SDCFormResponse/responses/validate/", response).catch((err) => {throw new Error(err)});
    return res.data;
  }

  async submitResponse(response, update=false) {
    let res = await axios.put("/api/SDCFormResponse/responses/" + this.state.response._id, response).catch((err) => {throw new Error(err)})
    console.log(res.data._id); // url
    let url = res.data._id;
    this.setState({
        formId: res.data._id,
      });
    console.log(res)
    console.log(update ? "form updated" : "form submitted");
    this.messageOnSubmit(update ? "Response updated" : "Response submitted!", "success")
    this.props.history.push(`/form-response/${url}`); // Go to form response page
  }

  handleSubmit = async (update=false) => {
    let response = {
      patient: this.state.patient,
      SDCForm: this.state.form,
      formTitle: this.state.form.title,
      formFiller: this.state.formFiller,
      submitted: true,
    }
    let invalidQuestions = await this.validateResponse(response).catch((error) => {
      console.log(error);
      this.messageOnSubmit("Response validation failed", "error");
      return;
    });
    if (invalidQuestions.length === 0) {
      await this.submitResponse(response, update).catch((error) => {
        console.log(error);
        this.messageOnSubmit("Response not submitted", "error");
      });
    } else {
      this.messageOnSubmit("Required Questions:", "error", invalidQuestions);
    }
  };

  handleCancelClick = () => {
    this.setState({
      form: null,
    });
    this.props.resetTab(0);
    axios.delete("/api/SDCFormResponse/responses/" + this.state.response._id);
  };

  autosave = () => {
    let response = {
      patient: this.state.patient,
      SDCForm: this.state.form,
      formTitle: this.state.form.title,
      formFiller: this.state.formFiller,
      submitted: false,
    }
    axios.put("/api/SDCFormResponse/responses/" + this.state.response._id, response).catch((error) => {
      console.log(error);
    });
    console.log("autosaving...")
  }

  renderSubmitButton = () => {
    if (this.state.editMode) {
      return (
        <Button
          onClick={() => this.handleSubmit(true)}
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
          <h1>{this.state.form.title}</h1>
          <div className="formSectionContainer">
            {this.state.form.sections.map((section) => (
              <div key={section.id}>
                <FormSection
                  section={section}
                  updateIsFormValid={this.updateIsFormValid}
                  readOnly={false}
                  onUpdate={this.autosave}
                />
              </div>
            ))}
            <FormSection
              section={{ sections: [], questions: this.state.form.questions }}
              updateIsFormValid={this.updateIsFormValid}
              readOnly={false}
              onUpdate={this.autosave}
            />
          </div>
          <div className="action-buttons">
            <Link to="/form-filler">
              <Button
                onClick={this.handleCancelClick}
                variant="contained"
                color="secondary"
              >
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

  handleFormSubmittedModalOpen = () => {
    this.setState({
      formSubmittedModalOpen: true,
    });
  };

  handleFormSubmittedModalClose = () => {
    this.setState({
      formSubmittedModalOpen: false,
    });
  };

  render() {
    return (
      <div className="container">
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
        <Modal
          open={this.state.formSubmittedModalOpen}
          onClose={this.handleFormSubmittedModalClose}
          className="form-submitted-modal"
        >
          <Card>
            <CardContent>
              <div className="form-submitted-title">Form Submitted!</div>
              <div className="form-submitted-text">
                The form id is: {this.state.formId}
              </div>
              <Button
                color="primary"
                variant="contained"
                href={"mailto:"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Form Receiver &nbsp; <MailOutlineIcon />
              </Button>
            </CardContent>
          </Card>
        </Modal>
      </div>
    );
  }
}

export default withRouter(CreateEditForm);
