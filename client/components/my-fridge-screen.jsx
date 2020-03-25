import React from 'react';

export default class MyFridgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeToAddFoodScreen = this.changeToAddFoodScreen.bind(this);
    this.changeToViewFridgeMembers = this.changeToViewFridgeMembers.bind(this);
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

  changeToUpcomingExpirationsScreen() {
    const setViewMethod = this.props.setView;
    setViewMethod('upcoming-expirations-screen');
  }

  render() {
    return (
      <div className="text-center">
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToAddFoodScreen}>Add Food</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToViewFridgeMembers}>Fridge Members</button>
        </div>
        <div className="mt-2">
          <button className="btn btn-secondary mt-5" onClick={this.changeToUpcomingExpirationsScreen}>Upcoming Expirations</button>
        </div>
      </div>
    );
  }
}
