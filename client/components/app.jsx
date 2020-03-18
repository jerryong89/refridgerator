import React from 'react';
import FridgeChat from './fridgechat';
import LoginHeader from './login-header';
import StartScreenLogin from './start-screen-login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: null,
      chat: []
    };
    this.createFridge = this.createFridge.bind(this);
  }

  createFridge(clientFridgeName) {
    fetch('/api/fridges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientFridgeName)
    }).then(response => {
      return (response.json());
    }).then(result => {
      this.setState({
        fridgeName: clientFridgeName
      });
    });
  }

  componentDidMount() {
    this.getChat();
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
        <LoginHeader/>
        <StartScreenLogin createFridgeMethod={this.createFridge}/>
        {this.state.chat.map(message => <FridgeChat key={message.messageId} post={message}/* post={this.postChat} */ />)}
      </div>
    );
  }
}
