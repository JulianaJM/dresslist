import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { isAuthenticated } from "../../services/authenticationService";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        // eslint-disable-next-line react/prop-types
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};
export default PrivateRoute;
