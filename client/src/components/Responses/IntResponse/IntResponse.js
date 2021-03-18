import React from "react";
import TextField from "@material-ui/core/TextField";
import "./IntResponse.css";

class Int extends React.Component {
  state = { input: "" };
  onInputChange = (event, value) => {
    this.setState({
      input: value,
    });
    this.props.question.answer = value;
  };
  render() {
    return (
      <div className="numberInputContainer">
        <div className="answer">
          {this.props.question !== undefined ? this.props.question.answer : ""}
        </div>
        {/* <TextField
          onChange={this.onInputChange}
          value={this.state.input}
          variant="outlined"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
      </div>
    );
  }
}

export default Int;
