import React, { Component } from "react";

import isLoggedIn from "../utils/auth";

import { withGlobalState } from "react-globally";

export class Logic extends Component {
  componentDidMount() {
    isLoggedIn().then(res => {
      this.props.setGlobalState({
        isLoggedIn: res
      });
    });
  }

  componentDidUpdate() {

  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.globalState.isLoggedIn != this.props.globalState.isLoggedIn) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return <>{this.props.children}</>;
  }
}

export default withGlobalState(Logic);
