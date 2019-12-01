import React from 'react';
import { Menu, MessageTextBox, MessageList, RecentMessageFeed } from '../components';
import { userIsAuthenticated } from '../HOCs';
// import { connect } from 'react-redux';
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
              <MessageTextBox 
              handleChange= {this.props.handleChange}
              value={this.props.text}
              postMessage={this.props.handleComposeMessage} 
              />
							<MessageList username={this.props.username} />
						</Grid.Column>
						<Grid.Column width={3}>
							<RecentMessageFeed />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				{/* <UserCard username={this.props.match.params.username} /> */}
			</React.Fragment>
		);
	}
}

// const mapStateToProps = (state) => {
//   return{
//     text: state.text
//   }
// }

// const mapDispatchToProps = {
//   postMessage
// }

// export const connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Profile);
// export withAsyncAction ('messages','postMessage')(Profile)
export default userIsAuthenticated(Profile);
