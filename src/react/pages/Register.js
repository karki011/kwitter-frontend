import React from 'react';
import { SignUpForm } from '../components';
import { userIsNotAuthenticated } from '../HOCs';

class Register extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SignUpForm />
			</React.Fragment>
		);
	}
}

export default userIsNotAuthenticated(Register);
