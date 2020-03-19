import React from 'react';
import LoginHeader from './login-header';
import LoginScreen from './login-screen';
import CreateFridgeScreen from './create-fridge-screen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridge: {
        fridgeId: '',
        fridgeName: ''
      },
      view: 'start-screen'
    };
    this.setView = this.setView.bind(this);
    this.displayView = this.displayView.bind(this);
    this.createFridge = this.createFridge.bind(this);
    this.getFridges = this.getFridges.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  displayView() {
    if (this.state.view === 'start-screen') {
      return (
        <LoginScreen setView={this.setView} getFridges={this.getFridges}/>
      );
    } else if (this.state.view === 'create-screen') {
      return (
        <CreateFridgeScreen setView={this.setView} createFridgeMethod={this.createFridge} />
      );
    }
  }

  getFridges(clientFridgeName) {
    event.preventDefault();
    fetch(`/api/fridges/${clientFridgeName}`)
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          fridge: {
            fridgeId: result,
            fridgeName: clientFridgeName
          }
        });
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
