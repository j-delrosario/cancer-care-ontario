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
      .get("http://localhost:3001/api/patients")
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
    if (input !== null) {
      this.setState(
        {
          patient: input,
        },
        () => {
          // Get patient forms
          axios
            .get(
              "http://localhost:3001/api/responses/user/" +
                this.state.patient._id
            )
            .then((res) => {
              console.log(res.data);
              this.setState({
                responses: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
      console.log("input", input);
    }
  };

  handleResponseChange = (response) => {
    this.setState({
      formResponse: response,
    });
  };

  renderFormResponse = () => {
    if (this.state.formResponse !== null) {
      return <Response response={this.state.formResponse} />;
    }
  };

  render() {
    return (
      <div>
        Responses
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
        {this.state.responses.map((response) => (
          <div key={response._id}>
            <div className="formTitle">
              <Button onClick={() => this.handleResponseChange(response)}>
                {response.formTitle}
              </Button>
            </div>
          </div>
        ))}
        {this.renderFormResponse()}
      </div>
    );
  }
}

export default GetResponses;
