import React from 'react';

export default class ExistingMemberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      selectedMemberId: ''
    };
    this.getMembers = this.getMembers.bind(this);
    this.memberDropDown = this.memberDropDown.bind(this);
    this.selectInputMember = this.selectInputMember.bind(this);
    this.assignExistingMember = this.assignExistingMember.bind(this);
  }

  getMembers() {
    fetch('/api/users')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          members: result
        });
      });
  }

  assignExistingMember(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
    fetch(`/api/users/${this.state.selectedMemberId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  selectInputMember(event) {
    event.preventDefault();
    this.setState({
      selectedMemberId: event.currentTarget.value
    });
  }

  componentDidMount() {
    this.getMembers();
  }

  memberDropDown() {
    const membersList = this.state.members;
    const allMembers = membersList.map(member => {
      return (
        <option key={member.userId} id={member.userId} value={member.userId}>{member.userName}</option>
      );
    });
    return allMembers;
  }

  render() {
    return (
      <div className="text-center mt-3">
        <form>
          <label htmlFor="Existing Members">
            Existing Members:
          </label>
          <div>
            <select name="" className="member-dropdown mt-4" onChange={this.selectInputMember}>
              <option>Members</option>
              {this.memberDropDown()}
            </select>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-secondary" onClick={this.assignExistingMember}>Select Member</button>
          </div>
        </form>
      </div>
    );
  }
}
