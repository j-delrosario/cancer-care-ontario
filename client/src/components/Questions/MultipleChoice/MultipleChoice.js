import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Int from "../Int/Int";
import Text from "../Text/Text";
import "./MultipleChoice.css";

class MultipleChoice extends React.Component {
  state = {
    isRadio: this.props.isRadio,
    choices: this.props.choices,
    input: "",
  };

  componentDidMount() {
    if (!this.state.isRadio) {
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

  // handleCheckboxChange = (event) => {
  //   this.state.choices.map((choice) =>
  //     choice.questionBody.questionTitle == event.target.name
  //       ? (choice.checked = event.target.checked)
  //       : choice
  //   );
  //   this.props.question.answer = choice.checked;
  // };

  handleCheckboxChange = (event) => {
    // this.state.choices.forEach((choice) => {
    //   if (choice.questionBody.questionTitle == event.target.name) {
    //     choice.checked = event.target.checked;
    //     this.props.question.choices.filter(
    //       (choice) => choice.questionBody.questionTitle == event.target.name
    //     )[0].checked = event.target.checked;
    //     console.log("checked", event.target.checked);
    //     console.log("choice", choice);
    //   }
    // });

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
          this.props.updateIsFormValid(false);
        }
      }
    }
    let newArray = [...this.state.choices];
    newArray[choiceIndex].checked = event.target.checked;
    this.setState({
      choices: newArray,
    });
  };

  renderQuestionType = (choice, display = false) => {
    // If the multiple choice selection is selected by the user
    if (this.state.input == choice.questionBody.questionTitle || display) {
      // If the multiple choice selection has a number input
      if (choice.questionBody.questionType == "Int") {
        return (
          <Int
            question={choice.questionBody}
            required={choice.checked === true}
            updateIsFormValid={this.props.updateIsFormValid}
          />
        );
      } else if (choice.questionBody.questionType == "String") {
        // If the multiple choice selection has a String input
        return (
          <Text
            question={choice.questionBody}
            required={choice.checked === true}
            updateIsFormValid={this.props.updateIsFormValid}
          />
        );
      }
    }
  };

  renderQuestion = () => {
    if (this.state.isRadio) {
      return (
        <div>
          <RadioGroup
            value={this.state.value}
            onChange={this.handleInputChange}
          >
            {this.state.choices.map((choice) => (
              <div key={choice._id} className="choiceContainer">
                <div className="choiceText">
                  <FormControlLabel
                    value={choice.questionBody.questionTitle}
                    control={<Radio />}
                    label={choice.questionBody.questionTitle}
                  />
                </div>
                <div className="inputContainer">
                  {this.renderQuestionType(choice)}
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>
      );
    } else {
      return (
        <div>
          <FormGroup>
            {this.state.choices.map((choice) => (
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
                  />
                </div>
                <div className="inputContainer">
                  {this.renderQuestionType(choice, true)}
                </div>
              </div>
            ))}
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
