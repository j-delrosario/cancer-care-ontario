import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import CreateEditForm from "./components/CreateEditForm/CreateEditForm";
import GetResponses from "./components/GetResponses/GetResponses";
import FormFiller from "./components/FormFiller/FormFiller";
import FormResponse from "./components/FormResponse/FormResponse";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import FormManager from './pages/FormManager/FormManager'
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
              path="/responses"
              render={() => (
                <div>
                  <Navbar />
                  <GetResponses />
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
