import React from 'react';

export default class CreateFridgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridge: {
        name: ''
      }
    };
    this.handleFridgeNameInput = this.handleFridgeNameInput.bind(this);
    this.handleCreateFridgeClick = this.handleCreateFridgeClick.bind(this);
    this.changeViewLogin = this.changeViewLogin.bind(this);
  }

  handleFridgeNameInput(event) {
    this.setState({
      fridge: {
        name: event.currentTarget.value
      }
    });
  }

  handleCreateFridgeClick(event) {
    event.preventDefault();
    const createFridgeMethod = this.props.createFridgeMethod;
    createFridgeMethod(this.state.fridge);
    const setViewMethod = this.props.setView;
    setViewMethod('start-screen');
  }

  changeViewLogin() {
    const setViewMethod = this.props.setView;
    setViewMethod('start-screen');
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form>
            <div>
              <input type="text" placeholder="Fridge Name" onChange={this.handleFridgeNameInput}/>
            </div>
            <div className="text-center mt-4">
              <button className="btn btn-secondary" onClick={this.handleCreateFridgeClick}>Create</button>
            </div>
          </form>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-danger" onClick={this.changeViewLogin}>Back</button>
        </div>
      </div>
    );
  }
}
