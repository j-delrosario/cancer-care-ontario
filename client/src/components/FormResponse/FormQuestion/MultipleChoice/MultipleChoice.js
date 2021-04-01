import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./MultipleChoice.css";

import FormQuestion from "../../FormQuestion/FormQuestion"

class MultipleChoice extends React.Component {
  state = {
    maxSelections: this.props.maxSelections,
    choices: this.props.choices,
    input: ""
  };

  componentDidMount() {
    if (this.state.maxSelections !== 1) {
      // Give choices a checked property to keep track if user checked it
      for (let index = 0; index < this.state.choices.length; index++) {
        const element = this.state.choices[index];
        if (element.checked === undefined) {
          element.checked = false;
        }
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleCheckboxChange = (event) => {
    // Update choices list
    let choiceIndex = -1;
    for (var i = 0; i < this.state.choices.length; i += 1) {
      if (
        this.state.choices[i].questionBody.questionTitle === event.target.name
      ) {
        choiceIndex = i;

        // Update form validation if an input is required after selecting it
        if (
          event.target.checked === true &&
          this.state.choices[i].questionBody.questionType !== "NoResponse"
        ) {
        }
      }
    }
    let newArray = [...this.state.choices];
    newArray[choiceIndex].checked = event.target.checked;
    this.setState({
      choices: newArray,
    });
  };

  renderQuestion = () => {
    if (this.state.maxSelections === 1) {
      return (
        <div className="multipleChoiceContainer">
          <FormControl component="fieldset">
          <RadioGroup
            value={this.state.input}
            onChange={this.handleInputChange}
          >
            {this.state.choices.map((choice) => (
              <div className="choiceContainer">
                <div className="choiceText">
                  <FormControlLabel
                    control={
                      <Radio
                      />
                    }
                    label={choice.questionBody.questionTitle}
                    value={choice.questionBody.questionTitle}
                  />
                  <FormQuestion
                    question={choice}
                    noTitle={true}
                    updateIsFormValid={this.props.updateIsFormValid}
                  />
                  </div>
              </div>
            ))}
          </RadioGroup>
          </FormControl>
        </div>
      );
    } else {
      return (
        <div className="multipleChoiceContainer">
          <FormGroup>
            {this.state.choices.map((choice) => {
              return (
              <div key={choice._id} className="choiceContainer">
                <div className="choiceText">

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={choice.checked}
                        onChange={this.handleCheckboxChange}
                      />
                    }
                    label={choice.questionBody.questionTitle}
                    name={choice.questionBody.questionTitle}
                  >

                  </FormControlLabel>
                <FormQuestion
                    question={choice}
                    noTitle={true}
                    updateIsFormValid={this.props.updateIsFormValid}
                />
                </div>

              </div>
            )})}
          </FormGroup>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderQuestion()}</div>;
  }
}

export default MultipleChoice;
