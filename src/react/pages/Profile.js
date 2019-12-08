import React from 'react';
import { Menu, MessageTextBox, MessageList, RecentMessageFeed, SearchPage } from '../components';
import { userIsAuthenticated } from '../HOCs';
import { Grid } from 'semantic-ui-react';

class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Grid celled="internally">
					<Grid.Row>
						<Grid.Column width={3}>
							<Menu
								isAuthenticated={this.props.isAuthenticated}
								username={JSON.parse(localStorage.login).result.username}
							/>
						</Grid.Column>
						<Grid.Column width={10}>
							<MessageTextBox
								handleChange={this.props.handleChange}
								value={this.props.text}
								postMessage={this.props.handleComposeMessage}
							/>
							<MessageList username={this.props.username} />
						</Grid.Column>
						<Grid.Column width={3}>
							<SearchPage username={this.props.username} />
							<RecentMessageFeed />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{/* <UserCard username={this.props.match.params.username} /> */}
			</React.Fragment>
		);
	}
}

export default userIsAuthenticated(Profile);
