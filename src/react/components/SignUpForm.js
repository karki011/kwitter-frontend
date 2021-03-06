import React from 'react';
import { Spinner } from '.';
import { withAsyncAction } from '../HOCs';
import logo from './logo.png';
import { Button, Form, Grid, Header, Image, Segment, Message } from 'semantic-ui-react';
import { Link } from '.';

class SignUpForm extends React.Component {
	state = { username: '', password: '', displayName: '' };

	handleLogin = (e) => {
		e.preventDefault();
		this.props.postUser(this.state);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { loading, error } = this.props;
		return (
			<React.Fragment>
				<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							<Image src={logo} alt="logo" avatar /> Create your account
						</Header>
						<Form id="SignUp-form" onSubmit={this.handleLogin} size="large">
							<Segment stacked>
								<Form.Input
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Username"
									type="text"
									name="username"
									autoFocus
									required
									onChange={this.handleChange}
								/>
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Display Name"
									type="text"
									name="displayName"
									required
									onChange={this.handleChange}
								/>
								<Form.Input
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
									required
									onChange={this.handleChange}
								/>

								<Button type="submit" disabled={loading} color="teal" fluid size="large">
									Sign Up
								</Button>

								<Message>
									<Link to="/">LOGIN</Link>
								</Message>
							</Segment>
						</Form>
						{loading && <Spinner name="circle" color="blue" />}
						{error && <p style={{ color: 'red' }}>{error.message}</p>}
					</Grid.Column>
				</Grid>
			</React.Fragment>
		);
	}
}

export default withAsyncAction('users', 'postUser')(SignUpForm);
