import React from 'react';
import { Menu, RecentMessageFeed, UserCard } from '../components';
import { userIsAuthenticated } from '../HOCs';
import { Grid } from 'semantic-ui-react';

class UserProfileEdit extends React.Component {
	render() {
		return (
			<React.Fragment>
				{/* <h2>Profile</h2> */}
				{/* <MessageTextBox />
							<MessageList /> */}
				<Grid celled="internally">
					<Grid.Row>
						<Grid.Column width={3}>
							<Menu isAuthenticated={this.props.isAuthenticated} />
						</Grid.Column>
						<Grid.Column width={10}>
							<UserCard />
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
