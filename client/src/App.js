import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Home/Home";
import Admin from "./components/Admin/Admin";
import FormManager from "./components/FormManager/FormManager";
import FormFiller from "./components/FormFiller/FormFiller";
import FormReceiver from "./components/FormReceiver/FormReceiver";

import FormResponse from "./components/FormResponse/FormResponse";

class App extends React.Component {
  state = {
    openSnackbarMessage: false,
    snackbarSeverity: "",
    snackbarMessage: "",
  };

  handleOpenSnackbarMessage = (severity, message) => {
    this.setState({
      snackbarSeverity: severity,
      snackbarMessage: message,
      openSnackbarMessage: true,
    });
  };

  handleCloseSnackbarMessage = () => {
    this.setState({
      openSnackbarMessage: false,
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Navbar />
                  <Home />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/form-filler"
              render={() => (
                <div>
                  <Navbar />
                  <FormFiller appState={this} />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              path="/form-response/:id"
              render={(props) => (
                <div>
                  <Navbar />
                  <FormResponse {...props} appState={this} />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/formmanager"
              render={() => (
                <div>
                  <Navbar />
                  <FormManager />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/form-receiver"
              render={() => (
                <div>
                  <Navbar />
                  <FormReceiver />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/admin"
              render={() => (
                <div>
                  <Navbar />
                  <Admin appState={this} />
                </div>
              )}
            ></Route>
          </Switch>
        </BrowserRouter>
        <Snackbar
          open={this.state.openSnackbarMessage}
          autoHideDuration={5000}
          onClose={this.handleCloseSnackbarMessage}
        >
          <Alert
            onClose={this.handleCloseSnackbarMessage}
            severity={this.state.snackbarSeverity}
          >
            {this.state.snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    );
  }
}

export default App;
