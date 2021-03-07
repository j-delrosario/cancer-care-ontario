import React from "react";
import TrueFalse from "../Questions/TrueFalse/TrueFalse";
import "./FormSection.css";

class FormSection extends React.Component {
  state = {
    form: {
      _id: "6041eeac0c39f6b06422afb7",
      title: "ADRENAL GLAND",
      diagnosticProcedure: {
        responses: [],
        _id: "6041eeac0c39f6b06422afb6",
        id: 1,
      },
      sections: [
        {
          _id: "6041eeac0c39f6b06422afb8",
          id: 4257.1000043,
          title: "SECTION 1",
          sectionText: "section 1 text info",
          questions: [
            {
              _id: "6041asdfsfsdd06422afb8",
              id: 324,
              orderNumber: 1,
              questionBody: {
                _id: "6041asdfsfsdd06sdfsfdd",
                __type: "Int",
                questionTitle: "Integer question title",
                questionText: "Integer question text",
              },
            },
            {
              _id: "6041asdfsfsddasdfasdfa",
              id: 326,
              orderNumber: 3,
              questionBody: {
                _id: "6041asdfsfsdd0asdfsafd3d",
                __type: "MultipleChoice",
                questionTitle: "MC question title",
                questionText: "MC question text",
                isRadio: true,
                choices: ["answer 1", "answer 2", "answer 3", "answer 4"],
              },
            },
            {
              _id: "6041asdfsffgfghfha",
              id: 3224,
              orderNumber: 4,
              controlQuestion: 326,
              controlAnswer: "answer 1",
              questionBody: {
                _id: "6041asdfsfsdasdfff3d",
                __type: "TrueFalse",
                questionTitle: "TF question title",
                questionText: "TF question text",
              },
            },
          ],
        },
        {
          _id: "6041eeac0c39f6b06422afbe",
          id: 17876.1000043,
          title: "TUMOR",
          sectionText: "extraneous info",
          questions: [
            {
              _id: "kjsfkjsfsdd06422afb8",
              id: 320,
              orderNumber: 2,
              questionBody: {
                _id: "244asdfsfsdd06sdfsfdd",
                __type: "String",
                questionTitle: "String question title",
                questionText: "String question text",
              },
            },
          ],
        },
      ],
    },
  };
  componentDidMount() {
    // TODO: Get form
  }

  // TODO: Add other types of questions
  // Returns question based on question type
  renderQuestionType(questionType) {
    if (questionType == "TrueFalse") {
      return <TrueFalse />;
    }
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.form.title}</h1>
        {this.state.form.sections.map((section) => (
          <div key={section.id}>
            <div className="sectionTitleContainer">
              <div className="sectionTitle">{section.title}</div>
              <div className="sectionText">{section.sectionText}</div>
            </div>
            {section.questions.map((question) => (
              <div key={question.id} className="questionContainer">
                <div className="questionTitle">
                  {question.questionBody.questionTitle}
                </div>
                <div className="questionText">
                  {question.questionBody.questionText}
                </div>
                {/* Render question based on its type  */}
                {this.renderQuestionType(question.questionBody.__type)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default FormSection;
