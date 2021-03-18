import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormSection from "./components/FormSection/FormSection";
import GetResponses from "./components/GetResponses/GetResponses";
import FormManager from './pages/FormManager/FormManager'
class App extends React.Component {
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
                  <FormSection location={undefined} />
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
      </div>
    );
  }
}

export default App;
