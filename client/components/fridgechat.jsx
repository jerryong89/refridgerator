import React from 'react';

export default class FridgeChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: ''
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
  }

  render() {
    return (
      <div>
        <h1 className="center">-FRIDGE CHAT-</h1>
        <h3 className="center">Garland Boys</h3>
        <div>Hey David, let me get two eggs.{/* {this.props.post.userId}{this.props.post.message} */}</div>
        <form onSubmit={this.handleSubmit}>
          <input className="chatBox" value={this.state.chat} onChange={this.handleChange} type="text"/>
        </form>
      </div>
    );
  }
}
