import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { store } from "./reducers/createStore";

import Home from "./views/Home";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route component={Home} exact path="/home" />
      </Switch>
    );
  }
}

export const PrivateRoute = ({ component: Component, name, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const state = store.getState();
      const { user } = state;
      const { modules } = user;
      if (modules) {
        for (let index = 0; index < modules.length; index++) {
          const element = modules[index];
          if (element.name === name && element.idtask === 1) {
            return <Component {...props} />;
          }
        }
      }
      return <Redirect to="/not-found" />;
    }}
  />
);
