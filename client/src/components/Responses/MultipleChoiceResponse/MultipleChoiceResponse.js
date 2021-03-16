import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import IntResponse from "../IntResponse/IntResponse";
import TextResponse from "../TextResponse/TextResponse";
import "./MultipleChoiceResponse.css";

class MultipleChoice extends React.Component {
  state = {
    isRadio: this.props.isRadio,
    choices: this.props.choices,
    input: "",
  };

  // componentDidMount() {
  //   if (!this.state.isRadio) {
  //     // Give choices a checked property to keep track if user checked it
  //     for (let index = 0; index < this.state.choices.length; index++) {
  //       const element = this.state.choices[index];
  //       element.checked = false;
  //     }
  //   }
  // }

  // handleInputChange = (event) => {
  //   this.setState({
  //     input: event.target.value,
  //   });
  // };

  // handleCheckboxChange = (event) => {
  //   this.state.choices.forEach((choice) => {
  //     if (choice.questionBody.questionTitle == event.target.name) {
  //       choice.checked = event.target.checked;
  //       this.props.question.choices.filter(
  //         (choice) => choice.questionBody.questionTitle == event.target.name
  //       )[0].checked = event.target.checked;
  //       console.log("checked", event.target.checked);
  //     }
  //   });
  // };

  renderQuestionType = (choice, display = false) => {
    // If the multiple choice selection is selected by the user
    if (this.state.input == choice.questionBody.questionTitle || display) {
      // If the multiple choice selection has a number input
      if (choice.questionBody.questionType == "Int") {
        return <IntResponse question={choice.questionBody} />;
      } else if (choice.questionBody.questionType == "String") {
        // If the multiple choice selection has a String input
        return <TextResponse question={choice.questionBody} />;
      }
    }
  };

  renderChoice = (choice) => {
    if (choice.checked == true) {
      return <div>choice.questionTitle</div>;
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
                <div className="choiceText">{this.renderChoice(choice)}</div>
                {/* <div className="inputContainer"> */}
                {this.renderQuestionType(choice)}
                {/* </div> */}
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
                {choice.checked ? (
                  <div className="checked">
                    {choice.questionBody.questionTitle}
                  </div>
                ) : (
                  <div className="notChecked">
                    {choice.questionBody.questionTitle}
                  </div>
                )}
                {/* <div className="choiceText">
                  <div className="choiceText">
                    {() => this.renderChoice(choice)}
                  </div>
                </div> */}
                {/* <div className="inputContainer"> */}
                {this.renderQuestionType(choice, true)}
                {/* </div> */}
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
