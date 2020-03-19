import React from 'react';

export default class NewMemberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: ''
      }
    };
    this.handleNewMemberInput = this.handleNewMemberInput.bind(this);
  }

  handleNewMemberInput(event) {
    this.setState({
      user: {
        userName: event.currentTarget.value
      }
    });
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form>
            <label htmlFor="New Member Name">
              <input type="text" placeholder="Name" onChange={this.handleNewMemberInput}/>
            </label>
            <div className="d-flex justify-content-center mt-4">
              <button className="btn btn-secondary">Create New Member</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
