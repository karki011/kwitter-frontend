import React from 'react';
import { Menu, MessageTextBox, MessageList, RecentMessageFeed, UserCard } from '../components';
import { userIsAuthenticated } from '../HOCs';
import { Grid } from 'semantic-ui-react';

class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Grid celled="internally">
					<Grid.Row>
						<Grid.Column width={3}>
							<Menu isAuthenticated={this.props.isAuthenticated} />
						</Grid.Column>
						<Grid.Column width={10}>
							<MessageTextBox />
							<MessageList />
						</Grid.Column>
						<Grid.Column width={3}>
							<RecentMessageFeed />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<UserCard username={this.props.match.params.username} />
			</React.Fragment>
		);
	}
}

export default userIsAuthenticated(Profile);
