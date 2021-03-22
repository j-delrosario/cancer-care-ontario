import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormSection from "./components/FormSection/FormSection";
import GetResponses from "./components/GetResponses/GetResponses";
import FormFiller from "./components/FormFiller/FormFiller";
import FormResponse from "./components/FormResponse/FormResponse";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

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
              exact
              path="/form-response"
              render={() => (
                <div>
                  <Navbar />
                  <FormResponse appState={this} />
                </div>
              )}
            ></Route>
          </Switch>

          {/* <Switch>
            <Route
              exact
              path="/responses"
              render={() => (
                <div>
                  <Navbar />
                  <GetResponses />
                </div>
              )}
            ></Route>
          </Switch> */}
        </BrowserRouter>
        <Snackbar
          open={this.state.openSnackbarMessage}
          autoHideDuration={10000}
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
