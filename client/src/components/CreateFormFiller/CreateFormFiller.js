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
      .post("http://localhost:3001/api/FormFiller/formFillers/", {
        name: this.state.name,
      })
      .then((res) => {
        this.props.closeModal();
        this.props.reloadFormFillers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Card className="modal">
          <div className="title">New Form Filler</div>
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

export default CreateFormFiller;
