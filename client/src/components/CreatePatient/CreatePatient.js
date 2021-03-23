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
    name: "",
    ohip: "",
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

  render() {
    return (
      <div>
        <Card className="modal">
          <div className="title">New Patient</div>
          <CardContent className="modalContent">
            <div>
              <TextField
                name="name"
                className="textfield"
                variant="outlined"
                label="Name"
                fullWidth
                onChange={this.onInputChange}
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
              />
            </div>
          </CardContent>
          <CardActions className="classActions">
            <Button
              onClick={() => this.handleSubmit()}
              color="primary"
              variant="contained"
            >
              Submit
            </Button>
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
