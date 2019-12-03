import React from 'react';
import { Feed, Icon } from 'semantic-ui-react';
import { userIsAuthenticated } from '../HOCs'

const messages = [
	{
		id: 963,
		text: 'Another one!',
		username: 'testuser',
		createdAt: '2019-11-19T17:20:06.804Z',
		likes: [ 1 ]
	},
	{
		id: 961,
		text: 'Hello World!',
		username: 'testuser',
		createdAt: '2019-11-19T14:22:36.773Z',
		likes: [ 23 ]
	},
	{
		id: 945,
		text:
			'This is a happy place, little squirrels live here and play. You can work and carry-on and put lots of little happy things in here.',
		username: 'testuser',
		createdAt: '2019-11-19T00:05:13.099Z',
		likes: [ 12 ]
	},
	{
		id: 938,
		text: 'This is my second message!',
		username: 'testuser',
		createdAt: '2019-11-18T16:07:42.936Z',
		likes: [ 22 ]
	},
	{
		id: 937,
		text: 'Hello World!',
		username: 'testuser',
		createdAt: '2019-11-18T15:52:56.879Z',
		likes: [ 56 ]
	}
];

class RecentMessageFeed extends React.Component {
	render() {
		return messages.map((message) => {
			return (
				<Feed size="large">
					<Feed.Event>
						{/* <Feed.Label>
						<img src="/images/avatar/small/elliot.jpg" />
					</Feed.Label> */}
						<Feed.Content>
							<Feed.Summary>
								<Feed.User>{message.username}</Feed.User> {message.text}
								<Feed.Date>{message.createdAt}</Feed.Date>
							</Feed.Summary>
							<Feed.Meta>
								<Feed.Like>
									<Icon name="like" />
									{message.likes}
								</Feed.Like>
							</Feed.Meta>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			);
		});
	}
}

export default userIsAuthenticated(RecentMessageFeed);
