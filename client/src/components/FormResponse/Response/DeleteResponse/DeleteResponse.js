import React from "react";
import axios from "axios";
import { Button, Card, CardContent, CardActions } from "@material-ui/core";
import "./DeleteResponse.css";

class DeleteResponse extends React.Component {
  state = { response: this.props.response };

  handleSubmit = () => {
    axios
      .delete("/api/SDCFormResponse/responses/" + this.state.response._id)
      .then((res) => {
        this.props.closeModal();
        this.props.reset();

        // Open success message
        const message = (
          <div>
            <h2>Response deleted!</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("success", message);
      })
      .catch((err) => {
        console.log(err);

        // Open failure message
        const message = (
          <div>
            <h2>Response not deleted</h2>
          </div>
        );
        this.props.appState.handleOpenSnackbarMessage("error", message);
      });
  };

  render() {
    return (
      <div>
        <Card className="deleteModal">
          <div className="title">Delete Response</div>
          <CardContent className="deleteModalContent">
            <div>Are you sure you want to delete this response?</div>
          </CardContent>
          <CardActions className="classActions">
            <Button
              onClick={() => this.handleSubmit()}
              color="primary"
              variant="contained"
            >
              Delete
            </Button>
            <Button
              onClick={() => this.props.closeModal()}
              color="secondary"
              variant="contained"
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default DeleteResponse;
