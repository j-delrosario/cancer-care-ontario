import React, { Component } from "react";
import Response from "../Response/Response";
import axios from "axios";
class FormResponse extends React.Component {
  state = { 
      response: "" 
    };

  componentDidMount() {
    let id = window.location.href.slice(39).trim()
    this.getResponseInfo(id)
  }

  getResponseInfo = (id) => {
    axios
      .get(`http://localhost:3001/api/SDCFormResponse/responses/${id}`)
      .then((res) => {
        this.setState({
          response: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
          { this.state.response === "" ? <Response response={this.state.response} /> : <p>URL not found!</p>}
      </div>
    );
  }
}

export default FormResponse;
