import React from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, Modal, TextField } from "@material-ui/core";
import Response from "../Response/Response";

import "./GetResponses.css";

class GetResponses extends React.Component {
  state = { patient: null, patients: [], responses: [], formResponse: null };

  componentDidMount() {
    // Get list of patients
    this.getPatients();
  }

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

  onPatientChange = (event, input) => {
    // Reset responses
    this.setState({
      responses: [],
      formResponse: null,
    });

    // Get responses by user
    if (input !== null) {
      this.setState(
        {
          patient: input,
        },
        () => {
          // Get patient forms
          axios
            .get(
              "http://localhost:3001/api/SDCFormResponse/responses/user/" +
                this.state.patient._id
            )
            .then((res) => {
              this.setState({
                responses: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
  };

  reset = () => {
    this.setState({
      responses: [],
      formResponse: null,
      patient: null,
    });
  };

  handleResponseChange = (response) => {
    this.setState({
      formResponse: response,
    });
  };

  renderFormResponse = () => {
    if (this.state.formResponse !== null) {
      return (
        <Response
          response={this.state.formResponse}
          reset={this.reset} // clear patient and responses on page
          resetTab={this.props.resetTab} // set tab back to new form tab for editMode
          appState={this.props.appState}
          canEdit={true}
        />
      );
    }
  };

  renderResponses = () => {
    if (this.state.responses.length === 0 && this.state.patient !== null) {
      return <div>No responses</div>;
    } else {
      return (
        <div>
          {this.state.responses.map((response) => (
            <div key={response._id}>
              <div className="formTitle">
                <Button onClick={() => this.handleResponseChange(response)}>
                  {response.SDCForm.title}
                </Button>
              </div>
            </div>
          ))}
          {this.renderFormResponse()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="responses-container">
        <Autocomplete
          className="autocomplete"
          value={this.state.patient}
          onChange={this.onPatientChange}
          options={this.state.patients}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose patient" variant="outlined" />
          )}
        />
        {this.renderResponses()}
      </div>
    );
  }
}

export default GetResponses;
