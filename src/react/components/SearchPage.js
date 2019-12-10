import React from 'react';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '../components';
import { Dropdown } from 'semantic-ui-react';

class SearchPage extends React.Component {
	render() {
		if (this.props.result === null) {
			return <Spinner name="cicle" color="blue" />;
		}
		const users = this.props.result.messages;
		let data = [];

		users.forEach((element) => data.push(element['username']));

		console.log('user:', users);

		return (
			<React.Fragment key={users.text}>
				<Dropdown placeholder="Search" fluid search selection options={users} />
			</React.Fragment>
		);
	}
}

export default withAsyncAction('messages', 'getMessages')(SearchPage);
