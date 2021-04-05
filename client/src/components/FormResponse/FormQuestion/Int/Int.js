import React from "react";
import { TextField, FormHelperText } from "@material-ui/core";

import "./Int.css";

class Int extends React.Component {
  state = {
    input:
      this.props.question !== undefined
        ? !this.props.clearResponse
          ? this.props.question.answer
          : ""
        : "",
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

    // if (value !== "" && this.props.required) {
    //   this.props.updateIsFormValid(true);
    // } else {
    //   this.props.updateIsFormValid(false);
    // }

    const isFormValid = this.checkIfQuestionIsValid();
    this.setState({
      isFormQuestionValid: isFormValid,
    });

    this.props.question.isValid = isFormValid;
  };

  checkIfQuestionIsValid = () => {
    if (this.props.required !== undefined && this.props.required === true) {
      return this.state.input !== "";
    }
    return true;
  };

  render() {
    return (
      <div className="numberInputContainer">
        <TextField
          // helperText={
          //   this.props.question.answer === undefined ? "Required" : ""
          // }
          // error={this.props.question.answer === undefined}
          value={!this.props.clearResponse ? this.state.input : ""}
          onChange={this.onInputChange}
          disabled={this.props.readOnly}
          multiline={this.props.readOnly}
          variant="outlined"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        {/* <FormHelperText>
          {this.state.isFormQuestionValid === true ? "" : "Required"}
        </FormHelperText> */}
      </div>
    );
  }
}

export default Int;
