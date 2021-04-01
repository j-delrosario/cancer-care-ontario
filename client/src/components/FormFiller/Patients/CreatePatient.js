import React, { Component } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import axios from "axios";
import "./CreatePatient.css";

class CreatePatient extends React.Component {
  state = {
    name: this.props.patient !== undefined ? this.props.patient.name : "",
    ohip: this.props.patient !== undefined ? this.props.patient.OHIPNumber : "",
    title: this.props.patient !== undefined ? "Update Patient" : "New Patient",
  };

  onInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = () => {
    axios
      .post("/api/Patient/patients/", {
        name: this.state.name,
        OHIPNumber: this.state.ohip,
      })
      .then((res) => {
        this.props.closeModal();
        this.props.reloadPatients();
        // Open success message
        const message = (
          <div>
            <h2>Patient Added!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>Patient not added!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  handleUpdate = () => {
    axios
      .put("/api/Patient/patients/" + this.props.patient._id, {
        name: this.state.name,
        OHIPNumber: this.state.ohip,
      })
      .then((res) => {
        this.props.closeModal();
        this.props.reloadPatients();
        // Open success message
        const message = (
          <div>
            <h2>Patient Updated!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>Patient not updated!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  renderSubmitButton = () => {
    if (this.props.editMode !== undefined && this.props.editMode) {
      return (
        <Button
          onClick={() => this.handleUpdate()}
          color="primary"
          variant="contained"
        >
          Update
        </Button>
      );
    } else {
      return (
        <Button
          onClick={() => this.handleSubmit()}
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      );
    }
  };

  render() {
    return (
      <div>
        <Card className="modal">
          <div className="title">{this.state.title}</div>
          <CardContent className="modalContent">
            <div>
              <TextField
                name="name"
                className="textfield"
                variant="outlined"
                label="Name"
                fullWidth
                onChange={this.onInputChange}
                value={this.state.name}
              />
            </div>
            <div>
              <TextField
                name="ohip"
                className="textfield"
                variant="outlined"
                label="OHIP Number"
                fullWidth
                onChange={this.onInputChange}
                type="number"
                value={this.state.ohip}
              />
            </div>
          </CardContent>
          <CardActions className="classActions">
            {this.renderSubmitButton()}
            <Button
              onClick={() => this.props.closeModal()}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default CreatePatient;