import React from 'react';
import {RadioGroup, Radio, FormControlLabel} from '@material-ui/core';

class TrueFalse extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: "true", // defaults to string true (not boolean)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => ({
        formValue: prevState.formValue == "true" ? "false" : "true"
    }));
  }

  render() {
    return (
      <div>
        <RadioGroup value={this.state.formValue} onChange={this.handleChange}>
            <FormControlLabel value="true" control={<Radio />} label="True" />
            <FormControlLabel value="false" control={<Radio />} label="False" />
        </RadioGroup>
      </div>
    );
  }
}

export default TrueFalse;
