import React from "react";
//import { withAsyncAction } from "../HOCs";
import { Button } from "semantic-ui-react";

class GoogleLoginButton extends React.Component {
  handleLogin = e => {
    e.preventDefault();
    this.props.googleLogin();
  };
  render() {
    return (
      <Button onClick={this.handleLogin} color="blue" fluid size="large">
        Login in with Google
      </Button>
    );
  }
}

export default GoogleLoginButton;
