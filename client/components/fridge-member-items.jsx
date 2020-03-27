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
      <div className="container d-flex flex-wrap justify-content-center">
        <h1 className="text-center">-Fridge Member-</h1>
        <h2 className="text-center">-{this.props.userName}-</h2>
        <div className="container">{this.props.foodName}</div>
      </div>
    );
  }
}
