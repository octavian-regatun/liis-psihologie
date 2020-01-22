import React, { Component } from "react";

import NavBar from "../components/NavBar";
//MUI
import Grid from "@material-ui/core/Grid";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

import classNames from "classnames";

import myTheme from "../utils/myTheme.js";
import utilityClasses from "../utils/utilityClasses.js";

const theme = createMuiTheme({});

const styles = theme => ({
  gridItem: {
    display: "flex",
    justifyContent: "center"
  },
  elevi: {
    backgroundColor: myTheme.colors.blue.light,
    color: myTheme.text.primary,
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 30,
      height:"50%"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 35
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 60
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 65
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 72
    },
    height:"60%"
  },
  profesori: {
    backgroundColor: myTheme.colors.blue.dark,
    color: myTheme.text.white,
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 30,
      height:"50%"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 35
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 50
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 50
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 50
    },
    [theme.breakpoints.up("sm")]: {
      height:"60%"
    },
  },
  forum: {
    backgroundColor: myTheme.text.primary,
    color: myTheme.text.white,
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      fontSize: 40,
      height:"50%"
    },
    [theme.breakpoints.only("sm")]: {
      fontSize: 40
    },
    [theme.breakpoints.only("md")]: {
      fontSize: 50
    },
    [theme.breakpoints.only("lg")]: {
      fontSize: 50
    },
    [theme.breakpoints.only("xl")]: {
      fontSize: 50
    },
    [theme.breakpoints.up("sm")]: {
      height:"40%"
    },
  },
  container:{
    height:"100vh"
  }
});

export class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
      <NavBar />
        <Grid className={classes.container} container>
          <Grid
            xs={6}
            lg={6}
            item
            className={classNames(classes.gridItem, classes.elevi)}
          >
            <div style={{ alignSelf: "center" }}>
              <p>ELEVI</p>
            </div>
          </Grid>
          <Grid
            xs={6}
            lg={6}
            item
            className={classNames(classes.gridItem, classes.profesori)}
          >
            <div style={{ alignSelf: "center" }}>
              <p>PROFESOR</p>
            </div>
          </Grid>
          <Grid
            xs={12}
            item
            className={classNames(classes.gridItem, classes.forum)}
          >
            <div style={{ alignSelf: "center" }}>
              <p>FORUM</p>
            </div>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(Home);
