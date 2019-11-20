import React from "react";
import { LoginForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Login extends React.Component {
  render() {
    return (
      <>
        <h2>Kwitter. Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Login);
