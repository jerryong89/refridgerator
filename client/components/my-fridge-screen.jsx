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

  render() {
    return (
      <div className="text-center">
        <h1 className="header-font mt-3 mb-3">My Fridge</h1>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToAddFoodScreen}>
            <i className="fas fa-utensils col-2 d-flex justify-content-center"></i>
              Add Food
            <i className="fas fa-utensils col-2 justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToViewAllGroceries}>
            <i className="fas fa-shopping-basket col-2 d-flex justify-content-center"></i>
            All Groceries
            <i className="fas fa-shopping-basket col-2 d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToViewFridgeMembers}>
            <i className="fas fa-users col-2 d-flex justify-content-center"></i>
            Fridge Members
            <i className="fas fa-users col-2 d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToMyGroceriesCategories}>
            <i className="fas fa-shopping-bag col-2 d-flex justify-content-center"></i>
            My Groceries
            <i className="fas fa-shopping-bag col-2 d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToViewFridgeChat}>
            <i className="far fa-comments col-2 d-flex justify-content-center"></i>
            Fridge Chat
            <i className="far fa-comments col-2 d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button className="btn btn-secondary mt-3 button-format my-fridge-screen-button d-flex justify-content-between button-3d action-button animate" onClick={this.changeToUpcomingExpirationsScreen}>
            <i className="far fa-clock col-2 d-flex justify-content-center"></i>
            Upcoming Expirations
            <i className="far fa-clock col-2 d-flex justify-content-center"></i>
          </button>
        </div>
      </div>
    );
  }
}
