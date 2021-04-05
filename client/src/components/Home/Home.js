import React from "react";
import { AppBar, Toolbar, Grid, Typography, Tooltip, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Home.css";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className="homepageview">
        <Grid container direction="column" justify="center" alignItems="center" spacing={10}>
          <Grid item>
            <Typography style={{
              fontSize: '50pt',
              fontWeight: "bolder"
            }}>
              SDC Form Platform
            </Typography>
          </Grid>
        <Grid container direction="row" justify="center" alignItems="center" spacing={10}>
            <Grid item>
              <Tooltip title="Create a new SDC Form or analyze submitted forms">
                <Button color="primary" href="/form-filler" className="link-text">
                  Form Filler
                </Button>
              </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Create or update SDC Forms given an XML file">
                <Button color="primary" href="/form-manager" className="link-text">
                  Form Manager
                </Button>
              </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Manage patients as well as form fillers">
                <Button color="primary" href="/admin" className="link-text">
                  Admin
                </Button>
              </Tooltip>
          </Grid>
          <Grid item>
              <Tooltip title="Find a valid SDC Form">
                <Button color="primary" href="/form-receiver" className="link-text">
                  Form Receiver
                </Button>
              </Tooltip>
          </Grid>
        </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
