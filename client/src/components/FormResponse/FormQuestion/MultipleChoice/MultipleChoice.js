import React from "react";
import {
  Radio,
  RadioGroup,
  FormGroup,
  FormControl,
  Checkbox,
  FormControlLabel,
  FormHelperText,
} from "@material-ui/core";
import "./MultipleChoice.css";

import FormQuestion from "../../FormQuestion/FormQuestion";

class MultipleChoice extends React.Component {
  state = {
    maxSelections: this.props.maxSelections,
    choices: this.props.choices,
    input: "",
    isFormQuestionValid: false,
  };

  componentDidMount() {
    // Give choices a checked property to keep track if user checked it
    for (let index = 0; index < this.state.choices.length; index++) {
      const element = this.state.choices[index];
      if (element.checked === undefined) {
        element.checked = false;
      }
    }
  }

  componentDidUpdate() {
    if (this.props.clearResponse) {
      this.state.choices.map((choice) => {
        choice.checked = false;
      });
    }
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    let choiceIndex = -1;
    for (var i = 0; i < this.state.choices.length; i += 1) {
      this.state.choices[i].checked = false;
      if (
        this.state.choices[i].questionBody.questionTitle === event.target.value
      ) {
        choiceIndex = i;
      }
    }
    let newArray = [...this.state.choices];
    newArray[choiceIndex].checked = event.target.checked;
    this.setState({
      choices: newArray,
    });

    // If a radio option is selected, the question is valid/completed
    if (event.target.checked === true) {
      this.setState({
        isFormQuestionValid: true,
      });
      this.props.question.isValid = true;
    }
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
    let newArray;
    if (
      event.target.checked &&
      this.state.choices[choiceIndex].selectionDeselectsSiblings
    ) {
      newArray = this.state.choices.map((choice) => {
        choice.checked = false;
        return choice;
      });
    } else {
      newArray = this.state.choices.map((choice, index) => {
        if (choice.selectionDeselectsSiblings && event.target.checked) {
          choice.checked = false;
        }
        return choice;
      });
    }
    newArray[choiceIndex].checked = event.target.checked;
    this.setState({
      choices: newArray,
    });

    // Check to see if there is atleast one answer selected. If so, question is valid.
    // Otherwise, form filler is still required to anwer the question
    const isQuestionValid = this.checkIfFormQuestionValid(newArray);

    this.setState({
      isFormQuestionValid: isQuestionValid,
    });

    this.props.question.isValid = isQuestionValid;
  };

  isDisabled(choice) {
    return !choice.selectionDisablesChildren && !choice.checked;
  }

  checkIfFormQuestionValid = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].checked === true) {
        return true;
      }
    }
    return false;
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
              {this.state.choices.map((choice, index) => {
                return (
                  <div className="choiceContainer">
                    <div className="choiceText">
                      <FormControlLabel
                        control={
                          <Radio
                            checked={
                              !this.props.clearResponse ? choice.checked : false
                            }
                          />
                        }
                        label={choice.questionBody.questionTitle}
                        value={choice.questionBody.questionTitle}
                        disabled={this.props.readOnly}
                      />
                      <FormQuestion
                        required={false}
                        question={choice}
                        noTitle={true}
                        updateIsFormValid={this.props.updateIsFormValid}
                        readOnly={
                          this.props.readOnly || this.isDisabled(choice)
                        }
                        selected={choice.checked}
                        clearResponse={
                          this.props.clearResponse || this.isDisabled(choice)
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </RadioGroup>
            {/* <FormHelperText>
              {this.state.isFormQuestionValid === true ? "" : "Required"}
            </FormHelperText> */}
          </FormControl>
        </div>
      );
    } else {
      return (
        <div className="multipleChoiceContainer">
          <FormGroup>
            {this.state.choices.map((choice, index) => {
              return (
                <div key={choice._id} className="choiceContainer">
                  <div className="choiceText">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ // Don't remove "=== true", checkmarks won't rerender otherwise
                            !this.props.clearResponse ? this.state.choices[index].checked === true : false
                          }
                          onChange={this.handleCheckboxChange}
                        />
                      }
                      label={choice.questionBody.questionTitle}
                      name={choice.questionBody.questionTitle}
                      disabled={this.props.readOnly}
                    ></FormControlLabel>
                    <FormQuestion
                      required={false}
                      question={choice}
                      noTitle={true}
                      updateIsFormValid={this.props.updateIsFormValid}
                      readOnly={this.props.readOnly || this.isDisabled(choice)}
                      selected={choice.checked}
                      clearResponse={
                        this.props.clearResponse || this.isDisabled(choice)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </FormGroup>
          {/* <FormHelperText>
            {this.state.isFormQuestionValid === true ? "" : "Required"}
          </FormHelperText> */}
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderQuestion()}</div>;
  }
}

export default MultipleChoice;
