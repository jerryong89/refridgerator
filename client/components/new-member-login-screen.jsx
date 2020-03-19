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
    this.handleCreateNewMember = this.handleCreateNewMember.bind(this);
  }

  handleNewMemberInput(event) {
    this.setState({
      user: {
        userName: event.currentTarget.value
      }
    });
  }

  handleCreateNewMember(event) {
    event.preventDefault();
    const createNewMemberMethod = this.props.createNewMember;
    createNewMemberMethod(this.state.user);
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
              <button className="btn btn-secondary" onClick={this.handleCreateNewMember}>Create New Member</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}