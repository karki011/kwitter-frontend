import React from 'react';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';
import { Card, Icon, Image, Label } from 'semantic-ui-react';

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
				<Card>
					<Image src={'http://simpleicon.com/wp-content/uploads/user1.svg'} wrapped ui={false} />
					<Card.Content>
						<Card.Header>{user.displayName} </Card.Header>
						<Card.Meta>
							<span>
								<Label>
									<Icon name="at" />
									{user.username}
								</Label>
							</span>
						</Card.Meta>
						<Card.Meta>
							<span className="date">Created: {new Date(user.createdAt).toDateString()}</span>
						</Card.Meta>
						<Card.Description>
							{user.about ? user.about : 'Stay tuned for the about details'}{' '}
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<a>
							<Icon name="user" />
							22 Friends
						</a>
					</Card.Content>
				</Card>
			</React.Fragment>
		);
	}
}

export default withAsyncAction('users', 'getUser')(UserCard);
