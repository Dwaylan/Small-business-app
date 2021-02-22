import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import LandingPage from "./Components/Landingpage";
import cookie from "cookie";
import Loginpage from "./Components/Loginpage";
import Listingspage from "./Components/Listingspage";

const checkAuth = () => {
  const cookie = cookie.parse(document.cookie);
  return (cookie = ["loggedIn"] ? true : false);
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Loginpage} />
      <Route exact path="/listings" component={Listingspage} />
    </Switch>
  );
};

export default Router;
