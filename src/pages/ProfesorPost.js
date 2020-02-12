import React, { Component } from "react";

import NavBar from "../components/NavBar";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";

// import myConstants from "../utils/myConstants";
// import myTheme from "../utils/myTheme";

import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import RichText from "@madebyconnor/rich-text-to-jsx";

import { Document, Page } from "react-pdf/dist/entry.webpack";

import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const theme = createMuiTheme({});

const styles = theme => ({
  gridContainer: {
    marginTop: "16px"
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  subtitle: {
    marginTop: "16px",
    marginBottom: "16px"
  },
  document: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

export class ProfesorPost extends Component {
  state = {
    numPages: null,
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  nextPage = () => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({ pageNumber: ++this.state.pageNumber });
    }
  };

  previousPage = () => {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: --this.state.pageNumber });
    }
  };

  render() {
    const { classes } = this.props;
    const { post } = this.props.location.state.post;
    console.log(post);
    console.log(post.document.fields.file.url);
    const { pageNumber, numPages } = this.state;
    return (
      <>
        <NavBar />
        <Container maxWidth="lg">
          <Grid className={classes.gridContainer} container>
            <Grid item xs={12}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography align="center" variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  {
                    // <RichText richText={post.richText} />
                  }
                  <Document
                    className={classes.document}
                    file={post.document.fields.file.url}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                  >
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <div className={classes.buttons}>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      size="small"
                      onClick={this.previousPage}
                    >
                      <ArrowBackIosIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      className={classes.margin}
                      size="small"
                      onClick={this.nextPage}
                    >
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </div>
                  <p align="center">
                    Page {pageNumber} of {numPages}
                  </p>
                </CardContent>
                {
                  // <CardActions>
                  //   <Button size="small">Learn More</Button>
                  // </CardActions>
                }
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default withStyles(styles)(ProfesorPost);
