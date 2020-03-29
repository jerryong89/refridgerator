import React from 'react';

export default class AddMemberToFridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newMember: ''
    };
    this.handleNewUserNameInput = this.handleNewUserNameInput.bind(this);
    this.addNewMemberToFridge = this.addNewMemberToFridge.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
  }

  handleNewUserNameInput(event) {
    event.preventDefault();
    this.setState({
      newMember: event.currentTarget.value
    });
  }

  addNewMemberToFridge() {
    event.preventDefault();
    const newMember = this.state;
    fetch('/api/newMember', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMember)
    })
      .then(response => {
        return response.json();
      }).then(result => {
        const setViewMethod = this.props.setView;
        setViewMethod('my-fridge-screen');
      });
  }

  backToPrevious() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center flex-wrap test">
        <h2 className="header-font text-center">Add Member</h2>
        <div className="">
          <div className="col-12">
            <input type="text" onChange={this.handleNewUserNameInput}/>
          </div>
          <div className="mt-4">
            <button className="btn btn-secondary button-format button-3d action-button animate" onClick={this.addNewMemberToFridge}>Add Member To Fridge</button>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format button-3d-red action-button animate" onClick={this.backToPrevious}>Back To Fridge</button>
          </div>
        </div>
      </div>
    );
  }
}
