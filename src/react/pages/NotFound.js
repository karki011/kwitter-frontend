import React from "react";
import { NavLink } from "../components";
import pages from "../pages";

class NotFound extends React.Component {
  render() {
    return (
      <>
        <p>Page not found for {this.props.location.pathname}</p>
        <NavLink to={pages.Home.path}>Go Home</NavLink>
      </>
    );
  }
}

export default NotFound;
