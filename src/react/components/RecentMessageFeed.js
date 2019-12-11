import React from "react";
import { Feed } from "semantic-ui-react";
// import { userIsAuthenticated } from '../HOCs';
import { withAsyncAction } from "../HOCs";
import { Spinner } from "../components";
import { Link } from ".";
// import { connect } from "react-redux";
// import * as actionCreators from "../../redux";

class RecentMessageFeed extends React.Component {
  componentDidMount() {
	this.props.getUserList();
  }

  render() {
    if (this.props.result === null) {
      return <Spinner name="cicle" color="red" />;
    }
    const users = this.props.result.users;
	
    return users.map(user => {
		console.log(user)
      return (
          <Feed size="large" key={user.username}>
            <Feed.Event>
              <Feed.Content>
                <Feed.Summary >
                  {/* <Icon name="at" /> */}

                  <Link to={`/profile/${user.username}`} >
                    <h4>@{user.username}</h4>
                  </Link>
                  {/* <Feed.Date>{message.createdAt}</Feed.Date> */}
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
      );
    });
  }
}

export default withAsyncAction("users", "getUserList")(RecentMessageFeed);
