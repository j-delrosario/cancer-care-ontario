import React from "react";

class FormSection extends React.Component {
  // var SDCFormSchema = new Schema({
  //   id: {type: Number, required: true},
  //   diagnosticProcedure: {type: Number, required: true},
  //   // Remove below after P1
  //   sections: [String],
  //   questions: [String],

  // Below is working copy
  /*
    diagnosticProcedure: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DiagnosticProcedureID",
        required: true},
    sections: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SDCSection",
    }],*/
  // });
  state = {
    dp: {
      id: 1,
      procedureForm: 1,
      // responses: [Number], //TODO: replace with SDCQuestionResponse?,
    },
    form: {
      diagnosticProcedure: 1,
      sections: [
        {
          id: 1,
          title: "First Section",
          sectionText: "text for first section",
          questions: [
            {
              id: 1,
              orderNumber: 1,
              controlQuestion: 1,
              controlAnswer: "",
              questionBody: {},
            },
          ],
        },
      ],
    },
  };
  componentDidMount() {
    // TODO: Get form
  }

  render() {
    return (
      <div>
        <h1>Form Section</h1>
        {this.state.form.sections.map((section) => (
          <div key={section.id}>
            <h2>{section.title}</h2>
            <h4>{section.sectionText}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default FormSection;
