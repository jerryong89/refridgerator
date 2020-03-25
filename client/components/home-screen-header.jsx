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

  render() {
    return (
      <div className="home-screen-header d-flex blank">
        <div className="col-6 header-left">
          <div>
            <div className="mt-1 d-flex align-items-center">
              <div className="user-icon"></div>
              <p className="ml-1">{this.state.userName}</p>
            </div>
            <div className="mt-1 d-flex align-items-center" onClick={this.changeToAddMemberToFridgeScreen}>
              <div className="user-icon"></div>
              <p className="ml-1">Add Member</p>
            </div>
          </div>
        </div>
        <div className="col-6 header-right">
          <div className="d-flex justify-content-center mt-3">
            <div className="client-fridge-logo" onClick={this.changeToMyFridgeScreen}></div>
          </div>
          <h4 className="text-center">{this.props.fridge.fridgeName}</h4>
        </div>
      </div>
    );
  }
}
