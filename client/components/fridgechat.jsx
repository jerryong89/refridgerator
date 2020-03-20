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
