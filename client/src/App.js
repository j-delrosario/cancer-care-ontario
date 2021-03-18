import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import FormSection from "./components/FormSection/FormSection";
import GetResponses from "./components/GetResponses/GetResponses";

class App extends React.Component {
<<<<<<< HEAD
  constructor() {
    super();

    this.state = {
      showDummyData: false,
      getResponse: null, 
      value: '',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  generateDummyData = () => {
    this.setState({showDummyData: true})
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendDummyData = () => fetch("http://localhost:3001/api/SDCForm", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "id":num,
      "diagnosticProcedure": 1,
      "sections": ["1", "2", "3"],
      "questions": [`${this.state.value}`]
    })
  })
  .then(res => console.log(res.json()))

getDummyData = () => axios.get(`http://localhost:3001/api/ADRENAL GLAND`)
  .then(function (response) {
    // handle success
    console.log(response.data)
    alert(response.data.questions)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  deleteDummyData = () => axios.delete(`http://localhost:3001/api/SDCForm/ADRENAL GLAND`, {data: ""})
  .then(function (response) {
    // handle success
    console.log(response.data)
    alert(response.data.questions)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  render() {
    return (
      <div>
        <p>New Question:</p>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>ID: {num}</p>
        {/* <input type="number" value={this.state.id} onChange={this.handleChange} /> */}

        <p onClick={this.generateDummyData}>GENERATE DUMMY DATA</p>
        {this.state.showDummyData ? <p>
    "id":"2",<br></br>
    "diagnosticProcedure": "1",<br></br>
    "sections": ["1", "2"],<br></br>
    "questions": {this.state.value}<br></br>
    </p> : <p></p>}
        <button onClick={this.sendDummyData}>SEND DUMMY DATA</button>
        <button onClick={this.getDummyData}>GET DUMMY DATA</button>
        <button onClick={this.deleteDummyData}>DELETE DUMMY DATA</button>
        {this.state.getResponse === null ? <p></p> : <p>{this.state.getResponse}</p>}
=======
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
                  <FormSection />
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
        </BrowserRouter>
>>>>>>> main
      </div>
    );
  }
}

export default App;
