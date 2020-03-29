import React from 'react';
import Chat from './chat';

export default class FridgeChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: [],
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.messageContainerRef = React.createRef();
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newMessage = this.state.message;
    this.postChat(newMessage);
    this.scrollToBottom();
  }

  getChat() {
    fetch('/api/messages')
      .then(res => res.json())
      .then(messages => this.setState({
        chat: messages
      }, this.scrollToBottom));
  }

  postChat(newMessage) {
    const newObj = { newMessage };
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
      .then(res => this.getChat())
      .then(() => this.setState({ message: '' }))
      .catch(error => {
        console.error('Error:', error);
      });
  }

  componentDidMount() {
    this.getChat();
  }

  scrollToBottom() {
    const messagesContainer = this.messageContainerRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  render() {
    return (
      <div className="chatBackground">
        <h2 className="center">-FRIDGE CHAT-</h2>
        <h4 className="center">{this.props.user.fridgeName}</h4>
        <div className="container">
          <div ref={this.messageContainerRef} className="scrolling-box textContainer ">
            <Chat message={this.state.chat} />
          </div>
        </div>
        <form>
          <div className="center">
            <input required className="col-9 chatBox" value={this.state.message} onChange={this.handleChange} type="text" />
            <button required type="submit" className=" center col-1 btn btn-success button-format button-3d-green action-button animate" onClick={this.handleSubmit}>&#8593;</button>
          </div>
        </form>
      </div>
    );
  }
}
