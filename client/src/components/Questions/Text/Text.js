import React from "react";
import "./Text.css";
import TextField from "@material-ui/core/TextField";

class Text extends React.Component {
  state = {
    input: "",
  };

  onInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      input: value,
    });

    this.props.question.answer = value;
  };

  render() {
    return (
      <div className="textFieldContainer">
        <TextField
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
