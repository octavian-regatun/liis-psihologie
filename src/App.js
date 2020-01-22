// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// MUI stuff
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

// Components
// import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

const theme = createMuiTheme({});

const styles = theme => ({
  container: {
    backgroundColor: "red"
  }
});

export class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.StrictMode>
        <Router>
          {/* <Navbar /> */}
            <Switch>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={LogIn} />
              <Route path="/" component={Home} />
            </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default withStyles(styles)(App);
