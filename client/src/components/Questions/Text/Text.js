import React from "react";
import "./Text.css";
import TextField from "@material-ui/core/TextField";

class Text extends React.Component {
  state = {
    input: "",
  };

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div className="textFieldContainer">
        <TextField
          value={this.state.input}
          onChange={this.handleInputChange}
          fullWidth
          multiline
          variant="outlined"
        />
      </div>
    );
  }
}

export default Text;
