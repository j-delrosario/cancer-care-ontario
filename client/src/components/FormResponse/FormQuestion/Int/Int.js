import React from "react";
import TextField from "@material-ui/core/TextField";

import "./Int.css"

class Int extends React.Component {
  state = {
    input: this.props.question !== undefined ? !this.props.clearResponse ? this.props.question.answer : "" : "",
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

    if (value !== "" && this.props.required) {
      this.props.updateIsFormValid(true);
    } else {
      this.props.updateIsFormValid(false);
    }
  };
  render() {
    return (
      <div className="numberInputContainer">
        <TextField
          /*helperText={
            this.props.required && this.state.input === "" ? "Required" : ""
          }
          error={this.props.required && this.state.input === ""}*/
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
      </div>
    );
  }
}

export default Int;
