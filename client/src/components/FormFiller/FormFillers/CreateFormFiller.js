import React, { Component } from "react";
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
} from "@material-ui/core";
import axios from "axios";
import "./CreateFormFiller.css";

class CreateFormFiller extends React.Component {
  state = {
    name: this.props.formFiller !== undefined ? this.props.formFiller.name : "",
    title:
      this.props.formFiller !== undefined
        ? "Update Form Filler"
        : "New Form Filler",
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
      .post("/api/FormFiller/formFillers/", {
        name: this.state.name,
      })
      .then((res) => {
        this.props.closeModal();
        this.props.reloadFormFillers();
        // Open success message
        const message = (
          <div>
            <h2>Form Filler Added!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);
        // Open error message
        const message = (
          <div>
            <h2>Form Filler not added!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  handleUpdate = () => {
    axios
      .put("/api/FormFiller/formFillers/" + this.props.formFiller._id, {
        name: this.state.name,
      })
      .then((res) => {
        this.props.closeModal();
        this.props.reloadFormFillers();
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

export default CreateFormFiller;
