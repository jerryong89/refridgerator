import React from 'react';

export default class FridgeMemberItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [],
      view: 'fridge-member-items'
    };
  }

  render() {
    return (
      <div className="container text-center">
        <h1 className="text-center header-font mt-2">Member Items</h1>
        <h4 className="text-center header-font">{this.props.userName}</h4>
        <div className="container d-flex justify-content-center">
          <div className="container">{this.props.foodName}</div>
        </div>
      </div>
    );
  }
}
