import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { createBrowserHistory } from "history";

ReactDOM.render(
  <Provider store={store}>
    <App history={createBrowserHistory({ forceRefresh: true })} />
  </Provider>,
  document.getElementById("root")
);