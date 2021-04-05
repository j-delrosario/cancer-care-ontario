import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import {CreateEditForm, GetResponses} from "../FormResponse";
class FormFiller extends React.Component {
  state = {
    tab:
      this.props.location !== undefined
        ? this.props.location.state.response
        : 0,

    tabText: "New Form",
    reloadResponses: 0,
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
          resetTab={this.resetTab}
        />
      );
    }
    return (
      <GetResponses appState={this.props.appState} resetTab={this.resetTab}/>
    );
  };

  resetTab = (tab) => {
    this.setState({
      tab: tab > 0 ? 1 : 0,
      tabText: tab === -1 ? "Edit Form" : tab === 0 ? "New Form" : "Responses",
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
