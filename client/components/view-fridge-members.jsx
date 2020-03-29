import React from 'react';
import FridgeMemberItems from './fridge-member-items';

export default class ViewFridgeMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      fridgeItems: [],
      userId: '',
      userName: '',
      view: 'view-all-fridge-members'
    };
    this.memberItems = this.memberItems.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.backToMembers = this.backToMembers.bind(this);
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

  getFridgeMembersGroceries() {
    fetch('/api/groceries')
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          fridgeItems: result
        });
      });
  }

  componentDidMount() {
    this.getFridgeMembers();
    this.getFridgeMembersGroceries();
  }

  memberItems(value, userName) {
    this.setState({
      view: 'fridge-member-items',
      userId: value,
      userName: userName
    });
  }

  backToPrevious() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  backToMembers() {
    this.setState({
      view: 'view-all-fridge-members'
    });
  }

  render() {
    if (this.state.view === 'fridge-member-items') {
      const userName = this.state.userName;
      const groceries = this.state.fridgeItems.filter(item => this.state.userId === item.userId);
      const mappedGroceries = groceries.map(item => {
        const groceryFoodname = item.foodName;
        const claimId = item.claimId;
        const qty = item.qty;
        return (
          <div className="container d-flex flex-wrap justify-content-between mt-2 mb-2 p-2 bg-secondary cursive-font member-items member-item-card" key={claimId}>
            <div className="col-7">{groceryFoodname}</div>
            <div className="col">Qty: {qty}</div>
          </div>
        );
      });
      return (
        <div>
          <FridgeMemberItems groceries={groceries} foodName={mappedGroceries} userName={userName} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format button-3d-red action-button animate" onClick={this.backToMembers}>Back</button>
          </div>
        </div >
      );
    }

    const fridgeState = this.props.fridge;
    const fridgeName = fridgeState.fridgeName;
    const membersList = this.state.members;
    const allMembers = membersList.map(member => {
      return (
        <div className="card container d-flex justify-content-around fridge-members mt-2 mb-2 pb-2 pt-2 bg-secondary text-white button-3d" key={member.userId} id={member.userId} value={member.userId}>
          <div className="d-flex justify-content-between">
            <h4 className="cursive-font ml-2">{member.userName}</h4>
            <i className="fas fa-chevron-right fa-2x" onClick={() => this.memberItems(member.userId, member.userName)}></i></div>
        </div>
      );
    });
    return (
      <div>
        <h2 className="text-center mt-2 mb-2 header-font">Fridge Members</h2>
        <h4 className="text-center mt-2 mb-2 header-font">{fridgeName}</h4>
        <div>{allMembers}</div>
        <div className="text-center mt-4">
          <button className="btn btn-danger button-format button-3d-red action-button animate" onClick={this.backToPrevious}>Back</button>
        </div>
      </div>
    );
  }
}
