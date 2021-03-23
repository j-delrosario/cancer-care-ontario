import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";

import "./Navbar.css";

class Navbar extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Link to="/" className="link">
              Home
            </Link>
            <Link to="/form-filler" className="link">
              Form Filler
            </Link>
            <Link to="/formmanager" className="link">
              Form Manager
            </Link>
            {/* </Link> */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
