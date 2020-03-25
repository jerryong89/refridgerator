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
  }

  getChat() {
    fetch('/api/messages')
      .then(res => res.json())
      .then(messages => this.setState({
        chat: messages
      }));
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

  render() {
    return (
      <div className="chatBackground">
        <div className="container wave">
          <div className="row">
            <div className="col-8 column">
              <div className="buttonName"><button className="headerButton"></button>Dae Kim</div>
              <div className="buttonName"><button className="headerButton"></button>Create Fridge</div>
              <div className="buttonName"><button className="headerButton"></button>Join Fridge</div>
              <div className="buttonName"><button className="headerButton"></button>Add Member</div>
            </div>
            <div className="col-4 column">
              <button className="headerBiggerButton"></button>
              <div className="buttonName"> Garland Boys</div>
            </div>
          </div>
        </div>
        <h2 className="center">-FRIDGE CHAT-</h2>
        <h4 className="center">Garland Boys</h4>
        <div className="container">
          <div className="scrolling-box textContainer">
            <Chat message={this.state.chat} />
          </div>
          <form onSubmit={this.handleSubmit}>
            <input required className="chatBox" value={this.state.message} onChange={this.handleChange} type="text" />
          </form>
        </div>
      </div>
    );
  }
}
