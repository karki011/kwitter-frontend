import React from "react";
import { withAsyncAction } from "../HOCs";
import { Button } from "semantic-ui-react";

class DeleteUserButton extends React.Component {
  handleDelete = e => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to delete your account?")) {
      this.props.deleteUser();
    }
  };
  render() {
    return (
      <React.Fragment>
      {this.props.currentUser === this.props._username && (

      <Button onClick={this.handleDelete} color="teal">
        Delete My Account
      </Button>
      
      )}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("users", "deleteUser")(DeleteUserButton);
