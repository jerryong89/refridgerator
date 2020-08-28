import React from 'react';

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      fridge: {
        fridgeName: ''
      }
    };
    this.changeViewCreateScreen = this.changeViewCreateScreen.bind(this);
    this.changeJoinFridgeScreen = this.changeJoinFridgeScreen.bind(this);
    this.handleFridgeNameInput = this.handleFridgeNameInput.bind(this);
    this.joinFridge = this.joinFridge.bind(this);
  }

  changeViewCreateScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('create-screen');
  }

  changeJoinFridgeScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('otherStart-screen');
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
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-secondary button-format button-3d action-button animate" onClick={this.changeJoinFridgeScreen}>Join Fridge</button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <div>
            <button className="btn btn-secondary button-format button-3d action-button animate" onClick={this.changeViewCreateScreen}>Create Fridge</button>
          </div>
        </div>
      </div >
    );
  }
}
