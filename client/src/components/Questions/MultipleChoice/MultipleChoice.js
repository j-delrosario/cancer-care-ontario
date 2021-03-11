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
        element.checked = false;
      }
    }
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleCheckboxChange = (event) => {
    this.state.choices.map((choice) =>
      choice.questionBody.questionTitle == event.target.name
        ? (choice.checked = event.target.checked)
        : choice
    );
  };

  renderQuestionType = (questionBody) => {
    // If the multiple choice selection is selected by the user
    if (this.state.input == questionBody.questionTitle) {
      // If the multiple choice selection has a number input
      if (questionBody.questionType == "Int") {
        return <Int />;
      } else if (questionBody.questionType == "String") {
        // If the multiple choice selection has a String input
        return <Text />;
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
                  {this.renderQuestionType(choice.questionBody)}
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
                  {this.renderQuestionType(choice.questionBody)}
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
