import React, { Component } from "react";

import { Container, TextField, Grid, Button } from "@material-ui/core";

import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

// import classNames from "classnames";
// import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import { Link } from "react-router-dom";

import axios from "axios";

import Cookies from "js-cookie";

import KeyboardEventHandler from "react-keyboard-event-handler";

import { withRouter } from "react-router-dom";

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
    margin: "16px 0px 16px 16px"
  }
});

export class SignUp extends Component {
  submit = () => {
    let form = {
      username: "",
      password: ""
    };

    form.username = document.getElementById("username").value;
    form.password = document.getElementById("password").value;

    console.log(form);

    axios
      .post(
        "https://liis-psihologie-server.herokuapp.com/api/auth/login",
        form
      )
      .then(res => {
        if (res.data.success) {
          console.log("Te-ai logat!");
          Cookies.set("token", res.data.token);
          this.props.history.push("/");
        } else {
          console.log("Nu te-ai putut loga!");
          console.log(res);
        }
      });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.page}>
        <KeyboardEventHandler
          handleKeys={["enter"]}
          onKeyEvent={(key, e) => {
            document.getElementById("submitButton").click();
          }}
        />
        <Container className={classes.container} maxWidth="xs">
          <div className={classes.icons}>
            <Link to="/">
              <Button className={classes.returnButton}>
                <ArrowBackOutlinedIcon className={classes.returnIcon} />
              </Button>
            </Link>
            <VpnKeyOutlinedIcon className={classes.keyIcon} />
          </div>
          <p className={classes.titleText} align="center">
            Loghează-te
          </p>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid className={classes.grid} container>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Nume de utilizator"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid className={classes.gridBottom} item xs={12}>
                <CssTextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Parolă"
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
                  onClick={this.submit}
                  id="submitButton"
                >
                  Trimite
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid className={classes.suggestion} item>
                <Link to="/signup">Nu ai cont? Înregistrează-te!</Link>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SignUp));
