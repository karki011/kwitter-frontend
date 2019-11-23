import React from 'react';
import { Menu, MessageTextBox, MessageList, UserCard } from '../components';
import { userIsAuthenticated } from '../HOCs';
import { Grid } from 'semantic-ui-react';

class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Menu isAuthenticated={this.props.isAuthenticated} />
				{/* <h2>Profile</h2> */}
				{/* <MessageTextBox />
							<MessageList /> */}
				<Grid celled="internally">
					<Grid.Row>
						<Grid.Column width={3}>
							<p>Side Nav</p>
						</Grid.Column>
						<Grid.Column width={10}>
							<MessageTextBox />
							<MessageList />
						</Grid.Column>
						<Grid.Column width={3}>
							<p>Recent post</p>
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<UserCard />
			</React.Fragment>
		);
	}
}

export default userIsAuthenticated(Profile);
