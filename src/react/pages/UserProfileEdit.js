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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird } from "@fortawesome/free-solid-svg-icons";

class Profile extends React.Component {
state = {
  username : this.props.match.params.username
}

  // componentDidMount(){
  //   if (this.props.match){
  //   this.setState({username: this.props.match.params.username})
  //   }
  // }

  componentDidUpdate(prevProps){
    if (prevProps.location.pathname !== this.props.location.pathname){
      this.setState({username: this.props.match.params.username})
    }
  }

  render() {

    return (
      <React.Fragment>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu isAuthenticated={this.props.isAuthenticated} />
            </Grid.Column>
            <Grid.Column width={10}>
              <UserCard _username={this.state.username} />
              <DeleteUserButton
                currentUser={JSON.parse(localStorage.login).result.username}
                _username={this.props.match.params.username}
              />
              <h3>My Kweets</h3>
              <MessageList username={this.props.match.params.username} />
            </Grid.Column>
            <Grid.Column width={3}>
              <FontAwesomeIcon icon={faKiwiBird} id="kwitterIcon" />
              <h3>Checkout these users!</h3>
              <hr />
              <RecentMessageFeed
              // _username={this.props.messages.getmessages.result.messages.messages.username}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default userIsAuthenticated(Profile);
