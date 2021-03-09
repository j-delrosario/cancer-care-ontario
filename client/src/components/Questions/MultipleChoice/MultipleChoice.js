import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Int from "../Int/Int";
import Text from "../Text/Text";
import "./MultipleChoice.css";

class MultipleChoice extends React.Component {
  state = {
    choices: this.props.choices,
    input: "",
  };

  handleInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
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

  render() {
    return (
      <div>
        <RadioGroup value={this.state.value} onChange={this.handleInputChange}>
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
  }
}

export default MultipleChoice;
