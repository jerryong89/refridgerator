import React from 'react';

export default class MyFridgeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeToAddFoodScreen = this.changeToAddFoodScreen.bind(this);
  }

  changeToAddFoodScreen() {
    const setViewMethod = this.props.setView;
    setViewMethod('add-food-screen');
  }

  render() {
    return (
      <div className="text-center">
        <button className="btn btn-secondary mt-5" onClick={this.changeToAddFoodScreen}>Add Food</button>
      </div>
    );
  }
}
