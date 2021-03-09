import React from "react";
import TextField from "@material-ui/core/TextField";

class Int extends React.Component {
  state = {};
  render() {
    return (
      <div className="numberInputContainer">
        <TextField
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
