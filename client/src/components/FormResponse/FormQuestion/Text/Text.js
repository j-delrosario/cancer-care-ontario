import React from "react";
import { TextField, FormHelperText } from "@material-ui/core";

import "./Text.css";

class Text extends React.Component {
  state = {
    input: this.props.question !== undefined ? this.props.question.answer : "",
    isFormQuestionValid: this.props.required === true ? false : true,
  };

  componentDidUpdate() {
    if (!!this.props.clearResponse) {
      this.state.input = "";
      this.props.question.answer = "";
    }
  }

  onInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value,
    });

    this.props.question.answer = value;

    const isFormValid = this.checkIfQuestionIsValid();
    this.setState({
      isFormQuestionValid: isFormValid,
    });

    this.props.question.isValid = isFormValid;
    if (this.props.onUpdate) {
      this.props.onUpdate();
    }
  };

  checkIfQuestionIsValid = () => {
    if (this.props.required !== undefined && this.props.required === true) {
      return this.state.input !== "";
    }
    return true;
  };

  render() {
    return (
      <div className="textFieldContainer">
        <TextField
          value={!this.props.clearResponse ? this.state.input : ""}
          onChange={this.onInputChange}
          disabled={this.props.readOnly}
          multiline={this.props.readOnly}
          fullWidth
          variant="outlined"
        />
        {/* {this.props.required !== undefined && this.props.required === true
          ? "Required"
          : "Not Required"} */}
        {/* <FormHelperText>
          {this.state.isFormQuestionValid === true ? "" : "Required"}
        </FormHelperText> */}
      </div>
    );
  }
}

export default Text;
