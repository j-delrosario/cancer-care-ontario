import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import Patients from "./Patients/Patients";
import FormFillers from "./FormFillers/FormFillers";
import "./Admin.css";

class Admin extends React.Component {
  state = {
    tab: 0,
  };

  // ---------- Tabs ----------
  handleTabChange = (event, newValue) => {
    this.setState({
      tab: newValue,
    });
  };

  renderTab = () => {
    if (this.state.tab === 0) {
      return <Patients appState={this.props.appState} />;
    }
    return <FormFillers appState={this.props.appState} />;
  };

  render() {
    return (
      <div>
        <div className="admin-title">Admin</div>
        <Tabs
          centered
          value={this.state.tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          <Tab label="Patients" />
          <Tab label="Form Fillers" />
        </Tabs>
        {this.renderTab()}
      </div>
    );
  }
}

export default Admin;
