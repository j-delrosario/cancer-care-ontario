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
import { CreateFormFiller } from "../../FormFiller/";
import "./FormFillers.css";

class FormFillers extends React.Component {
  state = {
    formfillers: [],
    deleteModalOpened: false,
    selectedFormFiller: { name: "" },
    addModalOpened: false,
    editModalOpened: false,
  };

  componentDidMount() {
    this.getFormFillers();
  }

  getFormFillers = () => {
    axios
      .get("/api/FormFiller/formFillers/")
      .then((res) => {
        console.log("formfillers", res.data);
        this.setState({
          formfillers: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>Could not retrieve Form Fillers</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  deleteFormFiller = () => {
    axios
      .delete(
        "/api/FormFiller/formFillers/" + this.state.selectedFormFiller._id
      )
      .then((res) => {
        this.closeDeleteModal();
        this.getFormFillers();
        // Open success message
        const message = (
          <div>
            <h2>FormFiller Deleted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);
        // Open failure message
        const message = (
          <div>
            <h2>FormFiller not deleted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  openDeleteModal = (formFiller) => {
    this.setState({
      deleteModalOpened: true,
      selectedFormFiller: formFiller,
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

  openEditModal = (formFiller) => {
    this.setState({
      editModalOpened: true,
      selectedFormFiller: formFiller,
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
        {this.state.formfillers.map((formFiller) => (
          <div key={formFiller._id} className="formFiller-row">
            <div className="formFiller-column">{formFiller.name}</div>
            <div className="formFiller-column">{formFiller.OHIPNumber}</div>
            <div className="formFiller-column">
              <Button
                color="primary"
                onClick={() => this.openEditModal(formFiller)}
              >
                Edit
              </Button>
            </div>
            <div className="formFiller-column">
              <Button
                color="secondary"
                onClick={() => this.openDeleteModal(formFiller)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
        <Modal
          open={this.state.deleteModalOpened}
          onClose={this.closeDeleteModal}
          className="formFiller-delete-modal"
        >
          <Card>
            <CardContent>
              Are you sure you want to delete{" "}
              {this.state.selectedFormFiller.name}?
            </CardContent>
            <CardActions>
              <Button onClick={() => this.closeDeleteModal()} color="secondary">
                Cancel
              </Button>
              <Button onClick={() => this.deleteFormFiller()} color="primary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </Modal>
        <Modal
          open={this.state.addModalOpened}
          onClose={this.closeAddModal}
          className="formFiller-add-modal"
        >
          <CreateFormFiller
            closeModal={this.closeAddModal}
            reloadFormFillers={this.getFormFillers}
            appState={this.props.appState}
          />
        </Modal>
        <Modal
          open={this.state.editModalOpened}
          onClose={this.closeEditModal}
          className="formFiller-edit-modal"
        >
          <CreateFormFiller
            closeModal={this.closeEditModal}
            reloadFormFillers={this.getFormFillers}
            appState={this.props.appState}
            formFiller={this.state.selectedFormFiller}
            editMode={true}
          />
        </Modal>
      </div>
    );
  }
}

export default FormFillers;
