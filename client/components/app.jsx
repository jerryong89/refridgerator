import React from 'react';
import LoginHeader from './login-header';
import StartScreenLogin from './start-screen-login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: null
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

  }

  render() {
    return (
      <div>
        <LoginHeader/>
        <StartScreenLogin createFridgeMethod={this.createFridge}/>
      </div>
    );
  }
}
