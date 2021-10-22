import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import App from "./App";
import store from "store/store";
import "assets/styles/index.css";
import NotificationProvider from "Notifications/NotificationProvider";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
