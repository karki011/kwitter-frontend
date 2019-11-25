import React from 'react';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';

class UserCard extends React.Component {
	componentDidMount() {
		this.props.getUser(this.props.username);
	}

	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="red" />;
		}
		const user = this.props.result.user;
		return (
			<React.Fragment>
				<img src={'http://simpleicon.com/wp-content/uploads/user1.svg'} alt={user.displayName} />
				<h3>{user.displayName} </h3>
				<p>{user.username} </p>
				<p>{user.about ? user.about : 'Stay tuned for the about details'} </p>
				<p>Created: {new Date(user.createdAt).toDateString()} </p>
				<p>Last Updated: {new Date(user.updatedAt).toDateString()} </p>
			</React.Fragment>
		);
	}
}

export default withAsyncAction('users', 'getUser')(UserCard);
