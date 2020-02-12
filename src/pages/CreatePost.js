import React, { Component } from 'react'

import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
 
import myConstants from "../utils/myConstants";
import myTheme from "../utils/myTheme";
 
const theme = createMuiTheme({});
 
const styles = theme => ({});


export class CreatePost extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                
            </div>
        )
    }
}

export default withStyles(styles)(CreatePost)
