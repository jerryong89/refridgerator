import React from 'react';

export default class UserGroceries extends React.Component {

  render() {
    const myGroceries = this.props.groceries;
    const mapGroceries = myGroceries.map(food => {
      return (
        <button className="col-10 mb-2 mt-2 bg-secondary text-white" key={food.claimId}>{food.foodName}, qty: {food.qty}</button>
      );
    });

    return (
      <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2">
        <h1>-My Groceries-</h1>
        <h2>-{this.props.title}-</h2>
        <div className="text-center col-10">{mapGroceries}</div>
      </div>
    );
  }
}
