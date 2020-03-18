import React from 'react';

export default class StartScreenLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: ''
    };
    this.handleFridgeNameInput = this.handleFridgeNameInput.bind(this);
    this.handleCreateFridgeClick = this.handleCreateFridgeClick.bind(this);
  }

  handleFridgeNameInput(event) {
    this.setState({
      fridgeName: event.currentTarget.value
    });
  }

  handleCreateFridgeClick(event) {
    event.preventDefault();
    const createFridgeMethod = this.props.createFridgeMethod;
    createFridgeMethod(this.state.fridgeName);
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <form>
          <div>
            <input type="text" onChange={this.handleFridgeNameInput}/>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={this.handleCreateFridgeClick}>Create Fridge</button>
          </div>
        </form>
      </div >
    );
  }
}
