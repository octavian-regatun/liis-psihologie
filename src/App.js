// import logo from "./logo.svg";
// import "./App.css";

import React from "react";

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

import PrivateRoute from "react-router-private";

import isLoggedIn from "./utils/auth";

import { withGlobalState } from "react-globally";

const theme = createMuiTheme({});

const styles = theme => ({
  container: {
    backgroundColor: "red"
  }
});

export class App extends React.Component {
  componentDidMount() {

  }

componentDidUpdate(){

}

  shouldComponentUpdate(nextProps) {
    if (nextProps != this.props.globalState.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

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
          <PrivateRoute
            exact
            path="/profesor/posts"
            exact
            component={Profesor}
            authStatus={this.props.globalState.isLoggedIn}
            redirectURL="/login"
          />
          {<Route path="/profesor/posts/:post" component={ProfesorPost} />}
          <Redirect exact from="/" to="/home" />
        </Switch>
      </Router>
    );
  }
}

export default withGlobalState(withStyles(styles)(App));
