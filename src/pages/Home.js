import React from "react";

import NavBar from "../components/NavBar";
//MUI
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import classNames from "classnames";

import myTheme from "../utils/myTheme.js";
import utilityClasses from "../utils/utilityClasses.js";

import { Link } from "react-router-dom";

import { withGlobalState } from "react-globally";

const theme = createMuiTheme({});

let homeHeight = 0;

const styles = theme => ({
  container: {
    // height:300
  },
  gridItem: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    height: "100%"
  },
  text: { fontSize: "8vw" },
  elevi: {
    backgroundColor: myTheme.colors.blue.dark,
    transition: "background-color 0.5s ease",
    "&:hover": {
      backgroundColor: myTheme.hover.blue.dark
    }
  },
  profesor: {
    backgroundColor: myTheme.colors.blue.light,
    transition: "background-color 0.5s ease",
    "&:hover": {
      backgroundColor: myTheme.hover.blue.light
    }
  },
  link: {
    width: "100%",
    height: "100%",
    textDecoration: "none"
  }
});

export class Home extends React.Component {
  state = {
    homeHeight: 200
  };

  componentDidMount() {
    this.setState({
      homeHeight: window.innerHeight - this.props.globalState.navBarHeight
    });
  }

  componentDidUpdate(previousProps, previousState) {
    this.setState({
      homeHeight: window.innerHeight - this.props.globalState.navBarHeight
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.globalState.navBarHeight !=
        this.props.globalState.navBarHeight ||
      nextState.homeHeight != this.state.homeHeight
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <NavBar id="NavBar" />
        <Grid container style={{ height: this.state.homeHeight }}>
          <Grid item xs={6} className={classes.gridItem}>
            <Link className={classes.link} to="/elevi/posts">
              <Paper className={classNames(classes.gridItem, classes.elevi)}>
                <p align="center" className={classes.text}>
                  ELEVI
                </p>
              </Paper>
            </Link>
          </Grid>
          <Grid item xs={6} className={classes.gridItem}>
            <Link className={classes.link} to="/profesor/posts">
              <Paper className={classNames(classes.gridItem, classes.profesor)}>
                <p align="center" className={classes.text}>
                  PROFESOR
                </p>
              </Paper>
            </Link>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withGlobalState(withStyles(styles)(Home));
