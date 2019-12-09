import React from "react";
// import { Link } from '.';
import { NavLink } from "react-router-dom";
import "./Menu.css";
import { withAsyncAction } from "../HOCs";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faSignOutAlt,
  faKiwiBird
} from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component {
  handleLogout = event => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div id="menu">
        <div className="logo">
          <FontAwesomeIcon icon={faKiwiBird} id="kwitterIcon" />
          <h1>Kwitter</h1>
        </div>
        {this.props.isAuthenticated && (
          <div id="menu-links">
            <div className="link">
              <FontAwesomeIcon icon={faHome} id="smallIcon" />
              <NavLink
                exact
                activeClassName="current"
                to={"/MessageFeed/"}
              >
                Home
              </NavLink>
            </div>
            <div className="link">
              <FontAwesomeIcon icon={faUser} id="smallIcon" />
              <NavLink activeClassName="current" to={`/profile/${this.props.username}`} onClick= {console.log(this.props)}>
                Profile
              </NavLink>
            </div>

            <div className="link">
              <FontAwesomeIcon icon={faSignOutAlt} id="smallIcon" />
              <NavLink to="/" onClick={this.handleLogout}>
                Logout
              </NavLink>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  if(state.auth.login.result){
    return {username: state.auth.login.result.username }
  } else return {};
}

export default connect (mapStateToProps)(withAsyncAction("auth", "logout")(Menu));
