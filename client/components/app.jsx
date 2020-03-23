import React from 'react';
// import FridgeChat from './fridgechat';
import LoginHeader from './login-header';
import LoginScreen from './login-screen';
import CreateFridgeScreen from './create-fridge-screen';
import MemberLoginScreen from './member-login-screen';
import NewMemberLoginScreen from './new-member-login-screen';
import ExistingMemberLoginScreen from './existing-member-login-screen';
import MyFridgeScreen from './my-fridge-screen';
import HomeScreenHeader from './home-screen-header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: null,
      chat: [],
      fridge: {
        fridgeId: '',
        fridgeName: ''
      },
      user: {
        userId: '',
        userName: ''
      },
      view: 'start-screen',
      loginError: false
    };
    this.setView = this.setView.bind(this);
    this.displayView = this.displayView.bind(this);
    this.createFridge = this.createFridge.bind(this);
    this.postChat = this.postChat.bind(this);
    this.getFridges = this.getFridges.bind(this);
    this.loginError = this.loginError.bind(this);
    this.createNewMember = this.createNewMember.bind(this);
    this.setExistingMember = this.setExistingMember.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  setExistingMember(clientUserId) {
    this.setState({
      user: {
        userId: clientUserId
      }
    });
  }

  displayView() {
    if (this.state.view === 'start-screen') {
      return (
        <div>
          <LoginHeader/>
          {this.loginError()}
          <LoginScreen setView={this.setView} getFridges={this.getFridges}/>
        </div>
      );
    } else if (this.state.view === 'create-screen') {
      return (
        <div>
          <LoginHeader />
          <CreateFridgeScreen setView={this.setView} createFridgeMethod={this.createFridge} />
        </div>
      );
    } else if (this.state.view === 'member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <MemberLoginScreen setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'new-member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <NewMemberLoginScreen setView={this.setView} createNewMember={this.createNewMember}/>
        </div>
      );
    } else if (this.state.view === 'existing-member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <ExistingMemberLoginScreen setView={this.setView} setExistingMember={this.setExistingMember}/>
        </div>
      );
    } else if (this.state.view === 'my-fridge-screen') {
      return (
        <div>
          <HomeScreenHeader fridge={this.state.fridge} user={this.state.user}/>
          <MyFridgeScreen/>
        </div>
      );
    }
  }

  loginError() {
    if (this.state.loginError === true) {
      return (
        <p className="text-center loginError">Please Enter An Existing Fridge Name</p>
      );
    }
  }

  getFridges(clientFridgeName) {
    event.preventDefault();
    fetch(`/api/fridges/${clientFridgeName}`)
      .then(response => {
        return response.json();
      }).then(result => {
        if (result.error) {
          this.setState({
            loginError: true
          });
        } else {
          this.setState({
            fridge: {
              fridgeId: result,
              fridgeName: clientFridgeName
            },
            loginError: false,
            view: 'member-login-screen'
          });
        }
      });
  }

  createFridge(clientFridgeName) {
    fetch('/api/fridges/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientFridgeName)
    }).then(response => {
      return (response.json());
    }).then(result => {
      this.setState({
        fridge: {
          fridgeId: result.fridgeId,
          fridgeName: result.fridgeName
        }
      });
    });
  }

  createNewMember(clientUserName) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientUserName)
    }).then(response => {
      return (response.json());
    }).then(result => {
      this.setState({
        user: {
          userId: result.userId,
          userName: result.userName
        }
      });
    });
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
      .then(res => res.json())
      .then(newMessage => {
        this.setState({
          chat: this.state.chat.concat(newMessage)
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        {/* <StartScreenLogin createFridgeMethod={this.createFridge}/> */}
        {/* <FridgeChat post={this.postChat} get={this.state.chat}/> */}
        {this.displayView()}
      </div>
    );
  }
}
