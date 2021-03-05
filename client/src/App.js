import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import FormSection from "./components/FormSection/FormSection";

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
                  <Home />
                </div>
              )}
            ></Route>
          </Switch>

          <Switch>
            <Route
              exact
              path="/form"
              render={() => (
                <div>
                  <FormSection />
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
