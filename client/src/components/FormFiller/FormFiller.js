import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import GetResponses from "../GetResponses/GetResponses";
import CreateEditForm from "../CreateEditForm/CreateEditForm";
class FormFiller extends React.Component {
  state = {
    tab:
      this.props.location !== undefined
        ? this.props.location.state.response
        : 0,

    tabText: "New Form",
  };

  // ---------- Tabs ----------
  handleTabChange = (event, newValue) => {
    this.setState({
      tab: newValue,
    });
  };

  renderTab = () => {
    if (this.state.tab === 0) {
      return (
        <CreateEditForm
          appState={this.props.appState}
          response={this.props.response}
        />
      );
    }
    return (
      <GetResponses appState={this.props.appState} resetTab={this.resetTab} />
    );
  };

  resetTab = () => {
    this.setState({
      tab: 0,
      tabText: "Edit Form",
    });
  };

  renderTabs = () => {
    // If a response is sent through props, that means it is to edit
    if (
      this.props.location !== undefined &&
      this.props.location.response !== undefined
    ) {
      return (
        <div>
          <Tab label="Edit Form" />
          <Tab label="Responses" />
        </div>
      );
    } else {
      return (
        <div>
          <Tab label="New Form" />
          <Tab label="Responses" />
        </div>
      );
    }
  };

  render() {
    return (
      <div className="base">
        <Tabs
          centered
          value={this.state.tab}
          indicatorColor="primary"
          textColor="primary"
          onChange={this.handleTabChange}
        >
          {/* {this.renderTabs()} */}
          <Tab label={this.state.tabText} />
          <Tab label="Responses" />
        </Tabs>

        {this.renderTab()}
      </div>
    );
  }
}

export default FormFiller;
