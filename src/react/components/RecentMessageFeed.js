import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '.';

class RecentMessageFeed extends React.Component {
	componentDidMount() {
		this.props.getMessages();
	}
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="red" />;
		}
		const messages = this.props.result.messages;

		return messages.map((message) => {
			return (
				<Feed size="large" key={message.id}>
					<Feed.Event>
						<Feed.Content>
							<Feed.Summary>
								<Feed.User>
									<Icon name="at" />
									{message.username}
								</Feed.User>
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			);
		});
	}
}

export default withAsyncAction('messages', 'getMessages')(RecentMessageFeed);
