import React, { Component } from "react";

import { Container, TextField, Grid, Button, Link } from "@material-ui/core";

import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import classNames from "classnames";
import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: myTheme.colors.blue.main
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: myTheme.colors.blue.main,
        borderWidth: "1.5px"
      },
      "&:hover fieldset": {
        borderColor: myTheme.colors.blue.light1
      },
      "&.Mui-focused fieldset": {
        borderColor: myTheme.colors.blue.dark
      }
    }
  }
})(TextField);

const theme = createMuiTheme({});

const styles = theme => ({
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    border: "3px",
    borderRadius: "25px",
    borderStyle: "solid",
    borderColor: myTheme.text.primary,
    padding: "0"
  },
  titleText: {
    fontSize: "20px",
    fontWeight: "bold",
    color: myTheme.colors.blue.main,
    marginLeft: "16px",
    marginRight: "16px",
    marginBottom: "0px",
    marginTop: "0px",
    borderWidth: "1px 0px 1px 0px",
    borderStyle: "solid",
    borderColor: myTheme.colors.blue.main,
    padding: "16px 0px"
  },
  textFieldGeneral: {
    display: "block",
    marginTop: "16px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "red"
  },
  grid: {
    paddingLeft: "16px",
    paddingRight: "16px",
    marginTop: "16px"
  },
  gridLeft: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "16px"
    }
  },
  gridBottom: {
    paddingBottom: "16px"
  },
  textField: {
    borderColor: myTheme.colors.blue.main
  },
  button: {
    display: "block",
    marginBottom: "16px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  suggestion: {
    padding: "0px 16px 16px 0px"
  },
  keyIcon: {
    color: myTheme.colors.blue.main,
    display: "block-inline",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    marginTop: "16px",
    marginBottom: "16px",
    height: "40px",
    width: "40px"
  },
  returnIcon: {
    color: myTheme.colors.blue.main,
    display: "block-inline",
    height: "40px",
    width: "40px"
  },
  icons: {
    display: "block-inline",
    width: "100%"
  },
  returnButton: {
    margin: "16px 0px 16px 16px",
  }
});

export class SignUp extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <Container className={classes.container} maxWidth="xs">
          <div className={classes.icons}>
            <Button className={classes.returnButton} href="/">
              <ArrowBackOutlinedIcon className={classes.returnIcon} />
            </Button>
            <VpnKeyOutlinedIcon className={classes.keyIcon} />
          </div>
          <p className={classes.titleText} align="center">
            Log In
          </p>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid className={classes.grid} container>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="nickname"
                  label="Nickname"
                  name="nickname"
                  autoComplete="nickname"
                />
              </Grid>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid className={classes.suggestion} item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up!
                </Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(SignUp);
