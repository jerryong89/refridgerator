import React from 'react';
import FridgeChat from './fridgechat';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      chat: []
    };
  }

  componentDidMount() {
    // this.getChat();
    // fetch('/api/health-check')
    //   .then(res => res.json())
    //   .then(data => this.setState({ message: data.message || data.error }))
    //   .catch(err => this.setState({ message: err.message }))
    //   .finally(() => this.setState({ isLoading: false }));
  }

  getChat() {
    fetch('/api/messsages')
      .then(res => res.json())
      .then(messages => this.setState({
        chat: messages
      }));
  }

  // postChat(newMessage) {
  //   fetch('/api/messages', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newMessage)
  //   })
  //     .then(res => res.json())
  //     .then(newMessage => {
  //       this.setState({
  //         chat: this.state.chat.concat(newMessage)
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }

  render() {
    return (
      <div>
        <FridgeChat/>
        {this.state.chat.map(message => <FridgeChat key={message.messageId} post={message}/* post={this.postChat} */ />)}
      </div>
      // this.state.isLoading
      // ? <h1>Testing connections...</h1>
      // : <h1>{this.state.message.toUpperCase()}</h1>;
    );
  }
}
