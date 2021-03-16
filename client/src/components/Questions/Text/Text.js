import React from "react";
import "./Text.css";
import TextField from "@material-ui/core/TextField";

class Text extends React.Component {
  state = {
    input: "",
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
