import React from 'react';

export default class HomeScreenHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      loaded: false
    };
    this.getSpecificUserName = this.getSpecificUserName.bind(this);
    this.changeToMyFridgeScreen = this.changeToMyFridgeScreen.bind(this);
    this.changeToAddMemberToFridgeScreen = this.changeToAddMemberToFridgeScreen.bind(this);
    this.changeToAllGroceriesScreen = this.changeToAllGroceriesScreen.bind(this);
    this.changeToMyGroceriesScreen = this.changeToMyGroceriesScreen.bind(this);
  }

  getSpecificUserName(clientUserId) {
    fetch('/api/users')
      .then(response => {
        return response.json();
      }).then(result => {
        const findIndexFunction = userArray => userArray.userId === parseInt(clientUserId);
        const theIndex = result.findIndex(findIndexFunction);
        if (result[theIndex] === undefined) {
          this.setState({
            userName: ''
          });
        } else {
          const setExistingMemberMethod = this.props.setExistingMember;
          setExistingMemberMethod(clientUserId, result[theIndex].userName);
          this.setState({
            userName: result[theIndex].userName,
            loaded: true
          });
        }
      });
  }

  componentDidUpdate() {
    if (this.state.loaded === false) {
      this.getSpecificUserName(this.props.user.userId);
    }
  }

  componentDidMount() {
    this.getSpecificUserName(this.props.user.userId);
    this.props.updateTotal();
  }

  changeToMyFridgeScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  changeToAddMemberToFridgeScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('add-member-to-fridge-screen');
  }

  changeToMyGroceriesScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('my-groceries-categories');
  }

  changeToAllGroceriesScreen(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('view-all-groceries');
  }

  render() {
    return (
      <div className="home-screen-header d-flex blank header-text">
        <div className="col-6 header-left">
          <div>
            <div className="mt-1 d-flex align-items-center" onClick={this.changeToMyGroceriesScreen}>
              <div className="user-icon d-flex justify-content-center align-items-center">
                <i className="fas fa-user"></i>
              </div>
              <p className="ml-1">{this.state.userName}</p>
            </div>
            <div className="mt-1 d-flex align-items-center" onClick={this.changeToAddMemberToFridgeScreen}>
              <div className="user-icon d-flex justify-content-center align-items-center">
                <i className="fas fa-user-friends"></i>
              </div>
              <p className="ml-1">Add Member</p>
            </div>
            <div className="mt-1 d-flex align-items-center" onClick={this.changeToAllGroceriesScreen}>
              <div className="user-icon d-flex justify-content-center align-items-center">
                <i className="fas fa-money-bill-wave"></i>
              </div>
              <p className="ml-1">Total Items: {this.props.totalItems.length}</p>
            </div>
            <div className="mt-1 d-flex align-items-center" onClick={this.changeToMyGroceriesScreen}>
              <div className="user-icon d-flex justify-content-center align-items-center">
                <i className="fas fa-coins"></i>
              </div>
              <p className="ml-1">My Items: {this.props.userTotal.length}</p>
            </div>
          </div>
        </div>
        <div className="col-6 header-right">
          <div className="d-flex justify-content-center mt-3">
            <div className="client-fridge-logo" onClick={this.changeToMyFridgeScreen}></div>
          </div>
          <h4 className="text-center fridge-name-styling">{this.props.fridge.fridgeName}</h4>
        </div>
      </div>
    );
  }
}
