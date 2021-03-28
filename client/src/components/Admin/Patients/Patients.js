import React from "react";
import axios from "axios";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Paper,
} from "@material-ui/core";
import "./Patients.css";
import CreatePatient from "../../CreatePatient/CreatePatient";

class Patients extends React.Component {
  state = {
    patients: [],
    deleteModalOpened: false,
    selectedPatient: { name: "" },
    addModalOpened: false,
    editModalOpened: false,
  };

  componentDidMount() {
    this.getPatients();
  }

  getPatients = () => {
    axios
      .get("/api/Patient/patients/")
      .then((res) => {
        this.setState({
          patients: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>Could not retrieve patients</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  deletePatient = () => {
    axios
      .delete("/api/Patient/patients/" + this.state.selectedPatient._id)
      .then((res) => {
        this.closeDeleteModal();
        this.getPatients();
        // Open success message
        const message = (
          <div>
            <h2>Patient Deleted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>Patient not deleted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  openDeleteModal = (patient) => {
    this.setState({
      deleteModalOpened: true,
      selectedPatient: patient,
    });
  };

  closeDeleteModal = () => {
    this.setState({
      deleteModalOpened: false,
    });
  };

  openAddModal = () => {
    this.setState({
      addModalOpened: true,
    });
  };

  closeAddModal = () => {
    this.setState({
      addModalOpened: false,
    });
  };

  openEditModal = (patient) => {
    this.setState({
      editModalOpened: true,
      selectedPatient: patient,
    });
  };

  closeEditModal = () => {
    this.setState({
      editModalOpened: false,
    });
  };

  render() {
    return (
      <div>
        <Button
          color="primary"
          variant="contained"
          onClick={() => this.openAddModal()}
        >
          Add New
        </Button>
        {this.state.patients.map((patient) => (
          <div key={patient._id} className="patient-row">
            <div className="patient-column">{patient.name}</div>
            <div className="patient-column">{patient.OHIPNumber}</div>
            <div className="patient-column">
              <Button
                color="primary"
                onClick={() => this.openEditModal(patient)}
              >
                Edit
              </Button>
            </div>
            <div className="patient-column">
              <Button
                color="secondary"
                onClick={() => this.openDeleteModal(patient)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Modal
          open={this.state.deleteModalOpened}
          onClose={this.closeDeleteModal}
          className="patient-delete-modal"
        >
          <Card>
            <CardContent>
              Are you sure you want to delete {this.state.selectedPatient.name}?
            </CardContent>
            <CardActions>
              <Button onClick={() => this.closeDeleteModal()} color="secondary">
                Cancel
              </Button>
              <Button onClick={() => this.deletePatient()} color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Modal>
        <Modal
          open={this.state.addModalOpened}
          onClose={this.closeAddModal}
          className="patient-add-modal"
        >
          <CreatePatient
            closeModal={this.closeAddModal}
            reloadPatients={this.getPatients}
            appState={this.props.appState}
          />
        </Modal>
        <Modal
          open={this.state.editModalOpened}
          onClose={this.closeEditModal}
          className="patient-edit-modal"
        >
          <CreatePatient
            closeModal={this.closeEditModal}
            reloadPatients={this.getPatients}
            appState={this.props.appState}
            patient={this.state.selectedPatient}
            editMode={true}
          />
        </Modal>
      </div>
    );
  }
}

export default Patients;
