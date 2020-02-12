import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-globally";
import { SnackbarProvider } from "notistack";

const initialState = {
  isLoggedIn: false,
  navBarHeight: 300
};

ReactDOM.render(
  <div>
    <Provider globalState={initialState}>
      <SnackbarProvider
        maxSnack={3}
        iconVariant={{
          success: "✅",
          error: "✖️",
          warning: "⚠️",
          info: "ℹ️"
        }}
        // content={(key, message) => <p id={key}> {message} </p>}
      >
        <App />
      </SnackbarProvider>
    </Provider>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
