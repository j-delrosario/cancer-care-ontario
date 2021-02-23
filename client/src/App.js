import logo from './logo.svg';
import './App.css';
import React from 'react';
const axios = require('axios');

const num = Math.floor(Math.random() * 9999)

class App extends React.Component {
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

  sendDummyData = () => fetch("http://localhost:3001/api/saveSDCForm", {
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

getDummyData = () => axios.get(`http://localhost:3001/api/getSDCForm?id=${num}`)
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
        <p onClick={this.sendDummyData}>SEND DUMMY DATA</p>
        <p onClick={this.getDummyData}>GET DUMMY DATA</p>
        {this.state.getResponse === null ? <p></p> : <p>{this.state.getResponse}</p>}
      </div>
    );
  }

}

export default App;
