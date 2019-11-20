import React from "react";
import { LoginForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <Menu /> */}
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
