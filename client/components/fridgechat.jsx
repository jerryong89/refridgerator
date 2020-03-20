import React from 'react';
import Chat from './chat';

export default class FridgeChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      chat: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newMessage = this.state.chat;
    this.props.post(newMessage);
  }

  render() {
    return (
      <div className="chatBackground">
        <div className="wave"></div>
        <h1 className="center">-FRIDGE CHAT-</h1>
        <h3 className="center">Garland Boys</h3>
        <div className="container">
          <div className="scrolling-box textContainer">
            <Chat message={this.props.get} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <input required className="chatBox" value={this.state.chat} onChange={this.handleChange} type="text" />
          </form>
        </div>
      </div>
    );
  }
}
