import React from 'react';
import MessageCard from './MessageCard';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';

// const messages = [
// 	{
// 		id: 963,
// 		text: 'Another one!',
// 		username: 'testuser',
// 		createdAt: '2019-11-19T17:20:06.804Z',
// 		likes: []
// 	},
// 	{
// 		id: 961,
// 		text: 'Hello World!',
// 		username: 'testuser',
// 		createdAt: '2019-11-19T14:22:36.773Z',
// 		likes: []
// 	},
// 	{
// 		id: 945,
// 		text:
// 			'This is a happy place, little squirrels live here and play. You can work and carry-on and put lots of little happy things in here.',
// 		username: 'testuser',
// 		createdAt: '2019-11-19T00:05:13.099Z',
// 		likes: []
// 	},
// 	{
// 		id: 938,
// 		text: 'This is my second message!',
// 		username: 'testuser',
// 		createdAt: '2019-11-18T16:07:42.936Z',
// 		likes: []
// 	},
// 	{
// 		id: 937,
// 		text: 'Hello World!',
// 		username: 'testuser',
// 		createdAt: '2019-11-18T15:52:56.879Z',
// 		likes: []
// 	}
// ];

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
