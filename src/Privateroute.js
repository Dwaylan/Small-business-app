import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

Privateroute.defaultProps = {
  isPrivate: true,
};

Privateroute.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

export default function Privateroute({
  component: Component,
  isPrivate: isPrivate,
  ...rest
}) {
  // Default status: the user is not signed in
  const signed = true;

  // if the route is private and the user is not signed in
  if (isPrivate && !signed) {
    return <Redirect to="/login" />;
  }
  // If the route is NOT public and the user is signed in
  if (!isPrivate && signed) {
    return <Redirect to="/" />;
  }
  return <route {...rest} component={Component} />;
}
