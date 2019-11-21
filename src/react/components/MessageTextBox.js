import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import './MessageTextBox.css';

class MessageTextBox extends Component {
	state = {};

	render() {
		return (
			<Form className="form-control">
				<Form.Field
					className="message-post-textarea"
					control={TextArea}
					label="Create Post"
					placeholder="What's on your mind? "
				/>
				<Form.Field className="postBtn" control={Button}>
					Post
				</Form.Field>
			</Form>
		);
	}
}

export default MessageTextBox;
