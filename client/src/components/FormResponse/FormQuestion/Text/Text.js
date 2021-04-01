import React from "react";
import TextField from "@material-ui/core/TextField";

import "./Text.css";

class Text extends React.Component {
  state = {
    input: this.props.question !== undefined ? this.props.question.answer : "",
  };

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
      <div className="textFieldContainer">
        <TextField
          helperText={
            this.props.required && this.state.input === "" ? "Required" : ""
          }
          error={this.props.required && this.state.input === ""}
          value={this.state.input}
          onChange={this.onInputChange}
          fullWidth
          multiline
          variant="outlined"
        />
      </div>
    );
  }
}

export default Text;
