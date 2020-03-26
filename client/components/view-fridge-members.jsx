import React from 'react';

export default class ViewFridgeMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      view: 'view-all-fridge-members'
    };
  }

  getFridgeMembers() {
    fetch('/api/users')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          members: result
        });
      });
  }

  componentDidMount() {
    this.getFridgeMembers();
  }

  render() {
    console.log(this.props.fridge);
    const fridgeState = this.props.fridge;
    const fridgeName = fridgeState.fridgeName;
    const membersList = this.state.members;
    const allMembers = membersList.map(member => {
      return (
        <div className="card container d-flex justify-content-center align-items-center col-8 mt-2 mb-2 pb-2 pt-2 bg-secondary text-white" key={member.userId} id={member.userId} value={member.userId}>
          <div className="card-title text-center">{member.userName}</div>
        </div>
      );
    });
    return (
      <div>
        <h1 className="text-center mt-2 mb-2">-Fridge Members-</h1>
        <h2 className="text-center mt-2 mb-2">-{fridgeName}-</h2>
        <div>{allMembers}</div>
      </div>
    );
  }
}
