import React from "react";
import axios from "axios";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Button, Modal, TextField } from "@material-ui/core";
import Response from "../Response/Response";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";

import "./GetResponses.css";

class GetResponses extends React.Component {
  state = {
    patient: null,
    patients: [],
    responses: [],
    formResponse: null,
    rows: [],
    columns: [
      { field: "_id", hide: true, filterable: false },
      {
        field: "SDCForm.title",
        headerName: "Form",
        width: 250,
        valueGetter: (params) => params.row?.SDCForm?.title,
        renderCell: (params) => (
          <strong>
            {/* <Link
              to={{
                pathname: `form-response/${params.row?._id}`,
                state: { fromFormFiller: true },
              }}
            >
              {params.row?.SDCForm?.title}
            </Link> */}
            <Button
              onClick={() => this.handleResponseChange(params.row)}
              color="primary"
            >
              {params.row?.SDCForm?.title}
            </Button>
          </strong>
        ),
      },
      {
        field: "patient.name",
        headerName: "Patient",
        width: 250,
        valueGetter: (params) => params.row?.patient?.name,
      },
      {
        field: "formFiller.name",
        headerName: "Form Filler",
        width: 250,
        valueGetter: (params) => params.row?.formFiller?.name,
      },
      {
        field: "timestamp",
        headerName: "Created At",
        width: 250,
        valueGetter: (params) =>
          new Date(params.row?.timestamp).toLocaleString(),
      },
    ],
  };

  componentDidMount() {
    // Get all responses
    this.getAllResponses();

    // Get list of patients
    this.getPatients();
  }

  getAllResponses = () => {
    axios
      .get("/api/SDCFormResponse/responses/")
      .then((res) => {
        console.log("all forms", res.data);
        this.setState({
          rows: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPatients = () => {
    axios
      .get("/api/Patient/patients")
      .then((res) => {
        this.setState({
          patients: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onPatientChange = (event, input) => {
    // Reset responses
    this.setState({
      responses: [],
      formResponse: null,
    });

    // Get responses by user
    if (input !== null) {
      this.setState(
        {
          patient: input,
        },
        () => {
          // Get patient forms
          axios
            .get(
              "/api/SDCFormResponse/responses/user/" + this.state.patient._id
            )
            .then((res) => {
              console.log("forms: ", res.data);
              this.setState({
                responses: res.data,
              });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
    }
  };

  reset = () => {
    this.setState({
      responses: [],
      formResponse: null,
      patient: null,
    });
  };

  handleResponseChange = (response) => {
    this.setState({
      formResponse: response,
    });
  };

  renderFormResponse = () => {
    if (this.state.formResponse !== null) {
      return (
        <Response
          response={this.state.formResponse}
          reset={this.reset} // clear patient and responses on page
          resetTab={this.props.resetTab} // set tab back to new form tab for editMode
          appState={this.props.appState}
          canEdit={true}
        />
      );
    }
  };

  renderResponses = () => {
    if (this.state.responses.length === 0 && this.state.patient !== null) {
      return <div>No responses</div>;
    } else {
      return (
        <div>
          {this.state.responses.map((response) => (
            <div key={response._id}>
              <div className="formTitle">
                <Button onClick={() => this.handleResponseChange(response)}>
                  {response.SDCForm.title}
                </Button>
              </div>
            </div>
          ))}
          {this.renderFormResponse()}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="responses-container">
        {/* <Autocomplete
          className="autocomplete"
          value={this.state.patient}
          onChange={this.onPatientChange}
          options={this.state.patients}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose patient" variant="outlined" />
          )}
        />
        {this.renderResponses()} */}
        <div style={{ height: 660, width: "100%" }}>
          <DataGrid
            rows={this.state.rows}
            columns={this.state.columns}
            pageSize={10}
          />
        </div>
        {this.renderFormResponse()}
      </div>
    );
  }
}

export default GetResponses;
