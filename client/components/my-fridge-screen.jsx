import React from 'react';

export default class MyFridgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeToAddFoodScreen = this.changeToAddFoodScreen.bind(this);
    this.changeToViewFridgeMembers = this.changeToViewFridgeMembers.bind(this);
    this.changeToMyGroceriesCategories = this.changeToMyGroceriesCategories.bind(this);
    this.changeToViewAllGroceries = this.changeToViewAllGroceries.bind(this);
    this.changeToViewFridgeChat = this.changeToViewFridgeChat.bind(this);
    this.changeToUpcomingExpirationsScreen = this.changeToUpcomingExpirationsScreen.bind(this);
    this.logOutChange = this.logOutChange.bind(this);
  }

  changeToAddFoodScreen() {
    const setViewMethod = this.props.setView;
    setViewMethod('add-food-screen');
  }

  changeToViewFridgeMembers() {
    const setViewMethod = this.props.setView;
    setViewMethod('view-all-fridge-members');
  }

  changeToMyGroceriesCategories() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-groceries-categories');
    // const userId = this.state.userId;
  }

  changeToViewAllGroceries() {
    const setViewMethod = this.props.setView;
    setViewMethod('view-all-groceries');
  }

  changeToViewFridgeChat() {
    const setViewMethod = this.props.setView;
    setViewMethod('view-fridge-chat');
  }

  changeToUpcomingExpirationsScreen() {
    const setViewMethod = this.props.setView;
    setViewMethod('upcoming-expirations-screen');
  }

  logOutChange() {
    const setViewMethod = this.props.setView;
    fetch('/api/delete', {
      method: 'DELETE'
    }).then(setViewMethod('start-screen'));
  }

  render() {
    return (
      <div className="text-center">
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToAddFoodScreen}>Add Food</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToViewAllGroceries}>All Groceries</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToViewFridgeMembers}>Fridge Members</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToMyGroceriesCategories}>My Groceries</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToViewFridgeChat}>Fridge Chat</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToUpcomingExpirationsScreen}>Upcoming Expirations</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.logOutChange}>Logout</button>
        </div>
      </div>
    );
  }
}
