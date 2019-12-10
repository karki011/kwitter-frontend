import React from "react";
import { LoginForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faComments, faEdit } from "@fortawesome/free-solid-svg-icons";

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="shapes"></div>
          <div className="left-side">
            <div className="prop-value">
              <FontAwesomeIcon icon={faEdit} className="prop-icon" />
              <p>Post short messages.</p>
            </div>
            <div className="prop-value">
              <FontAwesomeIcon icon={faComments} className="prop-icon" />
              <p>See what others are saying.</p>
            </div>
            <div className="prop-value">
              <FontAwesomeIcon icon={faUser} className="prop-icon-small" />
              <p>Customize your profile.</p>
            </div>
          </div>
          <div className="right-side">
            <LoginForm />
          </div>
        </div>
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
