import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import LandingPage from "./Components/Landingpage";
import PropTypes from "prop-types";
import Loginpage from "./Components/Loginpage";
import Listingspage from "./Components/Listingspage";

// const checkAuth = () => {
//   const cookie = cookie.parse(document.cookie);
//   return (cookie = ["loggedIn"] ? true : false);
// };

const RouteWrapper = ({
  component: Component,
  isPrivate: isPrivate,
  ...rest
}) => {
  const signed = false;

  // If route is private and the user is not signed in redirect the user to the login page
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={Loginpage} />
      <Route exact path="/listings" component={Listingspage} isPrivate />
    </Switch>
  );
};

export default Router;
