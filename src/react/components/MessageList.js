import React from "react";
import MessageCard from "./MessageCard";
// import {connect} from "react-redux";




export class MessageList extends React.Component {

  render() {
    const messageCardComponents = this.props.messages.map(item => (
      <MessageCard key={item.id} msg={item} />
    ));
    return <div>{messageCardComponents}</div>;
  }
}

// const mapStateToProps = (state) => {
//   return{
//     kweetMessage: state.kweetMessage
//   };
// };

// const mapDispatchToProps = {
//   handleComposeMessage,
//   handleChange
//  }

// export default connect(
//   mapStateToProps, 
//   null
//   )(MessageList);

export default MessageList
