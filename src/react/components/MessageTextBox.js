import React, { Component } from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import './MessageTextBox.css';
import { withAsyncAction } from '../HOCs';

class MessageTextBox extends Component {
  componentDidMount(){
    this.props.postMessage(this.props.postMessageBody)
  }
  
  state = { text: "" };

  // state = {
  //   kweetMessage: messages,
  //   value: "",
  //   likes: []
  // }

  handleComposeMessage = event => {
    // const newMessageList =  [...this.state.kweetMessage];
    // // console.log({ kweetmessage: this.state.kweetMessage })
    // newMessageList.unshift({
    //   id: Math.floor(Math.random() * 1000000000),
    //   text: this.state.value,
    //   username: "TestUserName",
    //   createdAt:"2019-11-18T15:52:56.879Z",
    //   likes: this.state.likes
    // });
    event.preventDefault();
    this.props.postMessage(this.state)
    this.setState({ text: "" })
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  // handleComposeMessage = () => {
  //   const newMessageList =  [...this.state.kweetMessage];
  //   // console.log({ kweetmessage: this.state.kweetMessage })
  //   newMessageList.unshift({
  //     id: Math.floor(Math.random() * 1000000000),
  //     text: this.state.value,
  //     username: "TestUserName",
  //     createdAt:"2019-11-18T15:52:56.879Z",
  //     likes: this.state.likes
  //   });
  //   this.setState({kweetMessage: newMessageList, value: ""})
  // };

  // handleChange = event => {
  //   this.setState({ value: event.target.value });
  // };

	render() {
		return (
			<Form className="form-control">
				<Form.Field
					className="message-post-textarea"
					control={TextArea}
					label="Create Post"
          placeholder="What's on your mind? "
          value={this.state.text}
        onChange={this.handleChange}
          />
        <Form.Field className="postBtn" 
        control={Button}
        onClick={this.handleComposeMessage}
        >
					Post
				</Form.Field>
			</Form>
		);
	}
}

export default withAsyncAction('messages', 'postMessage')(MessageTextBox);
