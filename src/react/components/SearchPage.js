import React from 'react';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';
import { Feed } from 'semantic-ui-react';

class SearchPage extends React.Component {
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="red" />;
		}
		const users = this.props.result.messages;
		console.log('users:', users);
		let user = [];
		users.forEach((element) => user.push(element['username']));
		console.log('user:', user);

		return (
			<React.Fragment>
				<Feed>
					<Feed.Content>
						<Feed.Summary>hi</Feed.Summary>
					</Feed.Content>
				</Feed>
			</React.Fragment>
		);
	}
}

export default withAsyncAction('messages', 'getMessages')(SearchPage);
