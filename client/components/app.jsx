import React from 'react';
import LoginHeader from './login-header';
import LoginScreen from './login-screen';
import CreateFridgeScreen from './create-fridge-screen';
import MemberLoginScreen from './member-login-screen';
import NewMemberLoginScreen from './new-member-login-screen';
import ExistingMemberLoginScreen from './existing-member-login-screen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.getFridges = this.getFridges.bind(this);
    this.loginError = this.loginError.bind(this);
    this.createNewMember = this.createNewMember.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  displayView() {
    if (this.state.view === 'start-screen') {
      return (
        <div>
          {this.loginError()}
          <LoginScreen setView={this.setView} getFridges={this.getFridges}/>
        </div>
      );
    } else if (this.state.view === 'create-screen') {
      return (
        <CreateFridgeScreen setView={this.setView} createFridgeMethod={this.createFridge} />
      );
    } else if (this.state.view === 'member-login-screen') {
      return (
        <MemberLoginScreen setView={this.setView}/>
      );
    } else if (this.state.view === 'new-member-login-screen') {
      return (
        <NewMemberLoginScreen createNewMember={this.createNewMember}/>
      );
    } else if (this.state.view === 'existing-member-login-screen') {
      return (
        <ExistingMemberLoginScreen/>
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
        fridgeName: clientFridgeName
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
        userName: clientUserName
      });
    });
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <LoginHeader/>
        {this.displayView()}
      </div>
    );
  }
}
