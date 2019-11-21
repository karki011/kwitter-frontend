import React from 'react';
import { Menu, MessageTextBox, MessageList, RecentMessageFeed } from '../components';

import { userIsAuthenticated } from '../HOCs';
import { Grid } from 'semantic-ui-react';

class Profile extends React.Component {
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
							<MessageTextBox />
							<MessageList />
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

export default userIsAuthenticated(Profile);
