import React, { Component } from "react";

import { Link } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import * as moment from "moment";
import "moment/locale/ro";

const theme = createMuiTheme({});

const styles = theme => ({
  card: {
    width: "100%"
  },
  gridItem: {
    marginTop: "16px",
    width: "100%"
  },
  title: {
    marginBottom: "0px"
  },
  accessButton: {
    marginLeft: "auto",
    marginRight: "auto",
    textDecoration: "none"
  }
});

export class ProfesorCard extends Component {
  titleToPath(title) {
    let path = title;
    if (title) {
      path = path.replace(" ", "-");
      path = path.toLowerCase();
    }
    return path;
  }

  formatDate(date) {
    let newDate = moment(date).format("dddd, D MMMM YYYY, HH:mm");
    
    // capitalizes first letter of each word
    newDate = newDate
      .toLowerCase()
      .split(" ")
      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");

    return newDate;
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.gridItem} item xs={12}>
        <Card className={classes.card}>
          <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                align="center"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {this.props.title}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography
                align="center"
                variant="body2"
                color="textSecondary"
                component="p"
              >
                {"Postata la data de: " + this.formatDate(this.props.createdAt)}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions disableSpacing>
            <Link
              to={{
                pathname: `/profesor/posts/${this.titleToPath(
                  this.props.title
                )}`,
                state: { post: this.props }
              }}
              className={classes.accessButton}
            >
              <Button size="small" color="primary">
                Accesează postarea
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(ProfesorCard);
