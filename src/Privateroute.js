import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const signed = false;

Privateroute.defaultProps = {
  isPrivate: false,
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
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isPrivate && !signed) {
          return <Redirect to="/login" />;
        }

        if (!isPrivate && signed) {
          return <Redirect to="/" />;
        }
      }}
    />
  );
}

// const RouteWrapper = ({
//     component: Component,
//     isPrivate: isPrivate,
//     ...rest
//   }) => {
//     const signed = false;

//     // If route is private and the user is not signed in redirect the user to the login page
//     if (isPrivate && !signed) {
//       return <Redirect to="/login" />;
//     }

//     if (!isPrivate && signed) {
//       return <Redirect to="/" />;
//     }

//     return <Route {...rest} component={Component} />;
//   };
