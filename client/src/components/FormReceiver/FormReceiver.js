import React from "react";
import "./FormReceiver.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import "./FormReceiver.css"
import Response from "../FormResponse/Response/Response";
import axios from "axios";

class FormReceiver extends React.Component {
  state = {
    url: "",
    response: ""
  };

  getResponseInfo = (id) => {
    axios
      .get(`/api/SDCFormResponse/responses/${id}`)
      .then((res) => {
        this.setState({
          response: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
      this.setState({url: event.target.value});
  };

  // only supports these two input formats:
  // http:localhost:3000/form-response/606a5ac49321f56170c2d695
  // 606a5ac49321f56170c2d695
  handleClick = () => {
    let url = this.state.url.length > 24 ? this.state.url.substring(this.state.url.lastIndexOf('/') + 1) : this.state.url;
    this.getResponseInfo(url);
  };

  render() {
    return (
      <div className="base">
        <div className="receiver-title">Form Receiver</div>
        <p>Please enter a valid Form Response URL or ID</p>
        <div className="textFieldContainer">
        <TextField
          onChange={this.handleChange}
          fullWidth
          variant="outlined"
        />
        <div className="button">
            <Button
                color="primary"
                onClick={() => this.handleClick()}
            >
                Find Form
            </Button>
        </div>
        {this.state.response !== "" ? (
          <Response response={this.state.response} />
        ) : (
          <p></p>
        )}
      </div>
      </div>
    );
  }
}

export default FormReceiver;