import React from 'react';
import MessageCard from './MessageCard';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';


class MessageList extends React.Component {
	componentDidMount() {
		this.props.getMessages(this.props.username);//need to also create a MessageList for the logged-in users messages only
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
					id = {message.id}
					username={message.username}
					text={message.text}
					createdAt={message.createdAt}
					currentUser={JSON.parse(localStorage.login).result.username}
				/>
			);
		});
	}
}

export default withAsyncAction('messages','getMessages')(MessageList);
