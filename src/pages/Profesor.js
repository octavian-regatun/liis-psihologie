import React, { Component } from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import NavBar from "../components/NavBar";

import * as contentful from "contentful";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

// import myConstants from "../utils/myConstants";
// import myTheme from "../utils/myTheme";

import ProfesorCard from "../components/ProfesorCard";

const theme = createMuiTheme({});

const styles = theme => ({});

export class Profesor extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    let loading = true;
    let posts = [];
    var client = contentful.createClient({
      space: "ksntgusva5gc",
      accessToken: "pFTa69C6OT_aIyMB-DssplZ9XASV0_SHz1thQf1YHFQ"
    });

    client.getEntries().then(entries => {
      entries.items.forEach(post => {
        posts.push(post);
      });
      loading = false;
      this.setState({ posts: posts });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <NavBar />
        {
          <Container maxWidth="lg">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.gridContainer}
            >
              {this.state.posts.map((fields, i) => (
                <ProfesorCard
                  post={fields.fields}
                  title={fields.fields.title}
                  createdAt={fields.fields.createdAt}
                  key={i}
                />
              ))}
            </Grid>
          </Container>
        }
      </>
    );
  }
}

export default withStyles(styles)(Profesor);
