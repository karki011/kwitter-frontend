import React from 'react';
import MessageCard from './MessageCard';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';

class MessageList extends React.Component {
	componentDidMount() {
		this.props.getMessages(this.props.username);
	}
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="red" />;
		}
		const messages = this.props.result.messages;

		return messages.map((message) => {
			return (
				<MessageCard
					key={message.id}
					username={message.username}
					text={message.text}
					createdAt={message.createdAt}
				/>
			);
		});
	}
}

export default withAsyncAction('messages', 'getMessages')(MessageList);
