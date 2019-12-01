import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import './MessageTextBox.css';
import { withAsyncAction } from '../HOCs';
import { Spinner } from '.';

class MessageTextBox extends Component {
	state = { text: '' };
	handlePostMessage = (e) => {
		e.preventDefault();
		this.props.postMessage(this.state);
		this.setState({
			text: ''
		});
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { loading, error } = this.props;

		return (
			<React.Fragment>
				<Form className="form-control" id="post-message" onSubmit={this.handlePostMessage} size="large">
					<Form.Field
						className="message-post-textarea"
						control={TextArea}
						label="Create Post"
						placeholder="What's on your mind? "
						name="text"
						onChange={this.handleChange}
						value={this.state.text}
					/>
					<Form.Field className="postBtn" control={Button}>
						Post
					</Form.Field>
				</Form>
				{loading && <Spinner name="circle" color="blue" />}
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
			</React.Fragment>
		);
	}
}

export default withAsyncAction('messages', 'postMessage')(MessageTextBox);
