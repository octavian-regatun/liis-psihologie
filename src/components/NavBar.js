import React, { getGlobal, setGlobal } from "reactn";

import { createMuiTheme } from "@material-ui/core/styles";
import { fade, withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import {
  AppBar,
  Toolbar,
  InputBase,
  Button,
  ButtonGroup
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import Logo from "../images/logo.png";

import { Link } from "react-router-dom";

import axios from "axios";

import Cookies from "js-cookie";

const theme = createMuiTheme({});

const styles = theme => ({
  navBar: {
    backgroundColor: "white"
  },
  title: {
    color: myTheme.text.primary,
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.only("xs")]: {
      fontSize: "10px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "20px"
    }
  },
  logo: {
    width: "3.5rem",
    maxWidth: "150px",
    padding: "8px",
    paddingRight: "16px"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  button: {
    color: myTheme.colors.blue.dark,
    [theme.breakpoints.only("xs")]: {
      fontSize: "8px",
      minHeight: "40px",
      maxHeight: "48px",
      whiteSpace: "nowrap"
    }
  },
  buttonGroup: {
    paddingRight: "15px",
    paddingLeft: "15px"
  },
  link: {
    textDecoration: "none"
  }
});

class NavBar extends React.PureComponent {
  logout = () => {
    axios
      .get(
        `https://liis-psihologie-server.herokuapp.com/api/auth/logout?token=${Cookies.get(
          "token"
        )}`
      )
      .then((err, res) => {
        if (err) {
          console.log("Nu te-ai putut deloga");
          console.log(err);
        } else if (!res.data.success) {
          console.log("Nu te-ai putut deloga");
          console.log(res.data.message);
        } else if (res.data.success) {
          console.log("Te-ai delogat");
          setGlobal({ isLoggedIn: false });
          Cookies.remove("token");
        }
      });
  };

  componentDidMount() {
    setGlobal({ navBarHeight: this.NavBarElement.clientHeight });
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar
        className={classes.navBar}
        position="sticky"
        ref={NavBarElement => {
          this.NavBarElement = NavBarElement;
        }}
      >
        <Toolbar>
          <Link className={classes.link} to="/">
            <img className={classes.logo} src={Logo} />
          </Link>
          <p className={classes.title}>LIIS-Psihologie</p>
          {getGlobal().isLoggedIn ? (
            <div className={classes.buttonGroup}>
              <Link className={classes.link} to="/login">
                <Button
                  variant="outlined"
                  className={classes.button}
                  style={{ marginRight: "8px" }}
                >
                  Loghează-te
                </Button>
              </Link>
              <Link className={classes.link} to="/signup">
                <Button variant="outlined" className={classes.button}>
                  Înregistrează-te
                </Button>
              </Link>
            </div>
          ) : (
            <Button
              variant="outlined"
              className={classes.button}
              onClick={this.logout}
            >
              Deloghează-te
            </Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
