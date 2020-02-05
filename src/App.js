// import logo from "./logo.svg";
// import "./App.css";

import React, { Component } from "react";

// React Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// MUI stuff
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

// Components
// import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Elevi from "./pages/Elevi";
import EleviPost from "./pages/EleviPost";
import Profesor from "./pages/Profesor";
import ProfesorPost from "./pages/ProfesorPost";

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
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />

          <Route path="/home" component={Home} />
          {
            // <Route path="/elevi/posts" component={Elevi} />
            // <Route path="/elevi/posts/:post" component={EleviPost} />
          }
          <Route exact path="/profesor/posts" component={Profesor} />
          {
            <Route path="/profesor/posts/:post" component={ProfesorPost} />
          }
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
