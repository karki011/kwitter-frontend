import React from "react";
import {
  Menu,
  RecentMessageFeed,
  UserCard,
  DeleteUserButton,
  MessageList
} from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Grid } from "semantic-ui-react";

class UserProfileEdit extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu isAuthenticated={this.props.isAuthenticated} />
            </Grid.Column>
            <Grid.Column width={10}>
              <UserCard
                username={JSON.parse(localStorage.login).result.username}
              />
              <DeleteUserButton />
              <h3>My Kweets</h3>
              <MessageList username={this.props.match.params.username} />
            </Grid.Column>
            <Grid.Column width={3}>
              <RecentMessageFeed />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(UserProfileEdit);
