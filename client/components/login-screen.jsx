import React from 'react';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      fridge: {
        fridgeName: ''
      }
    };
    this.changeViewCreateScreen = this.changeViewCreateScreen.bind(this);
    this.handleFridgeNameInput = this.handleFridgeNameInput.bind(this);
    this.joinFridge = this.joinFridge.bind(this);
  }

  changeViewCreateScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('create-screen');
  }

  handleFridgeNameInput(event) {
    this.setState({
      fridge: {
        fridgeName: event.currentTarget.value
      }
    });
  }

  joinFridge(event) {
    event.preventDefault();
    const joinFridgeMethod = this.props.getFridges;
    joinFridgeMethod(this.state.fridge.fridgeName);
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form>
            <label htmlFor="Fridge Name">
              <input type="text" className="cursive-font login-font-size" placeholder="Fridge Name" onChange={this.handleFridgeNameInput}/>
            </label>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-secondary button-format button-3d action-button animate" onClick={this.joinFridge}>Join Fridge</button>
            </div>
          </form>
        </div>
      </div >
    );
  }
}
