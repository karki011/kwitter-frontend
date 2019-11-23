import React from 'react';
import { Spinner } from '.';
//import { withAsyncAction } from '../HOCs';
import './LoginForm.css';
import logo from'./logo.png';
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import { connect } from "react-redux";

class SignUpForm extends React.Component {
	state = { username: '', password: '', email: ''};

	handleSignUp = event => {
        // translate state value to get this then put elsewhere
        this.props.SignUp({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        });
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
                        <Image src={logo} alt="logo" avatar/> Create your account
                        </Header>
                        <Form id="SignUp-form" onSubmit={this.handleSignUp} size="large">
                            <Segment stacked>
                                <Form.Input fluid icon="user" iconPosition="left" placeholder="Username" type="text" name="username" autoFocus required onChange={this.handleChange}/>
                                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Password" type="password" name="password" required onChange={this.handleChange} />
                                <Form.Input fluid icon="lock" iconPosition="left" placeholder="Email" type="email" name="email" required onChange={this.handleChange} />
                                
                                <Button type="submit" disabled={loading} color="teal" fluid size="large">
                                    Sign Up
                                </Button>
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
const mapStateToProps = state => {
    return {
      result: state.SignUpResult
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
      
      SignUpForm: SignUpData => dispatch(SignUpForm(SignUpData))
    };
};
  // export default SignUp;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpForm);

