import React from 'react';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeViewCreateScreen = this.changeViewCreateScreen.bind(this);
  }

  changeViewCreateScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('create-screen');
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <div>
            <button className="btn btn-secondary" onClick={this.changeViewCreateScreen}>Create Fridge</button>
          </div>
        </div>
      </div >
    );
  }
}
