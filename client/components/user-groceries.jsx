import React from 'react';

export default class UserGroceries extends React.Component {

  render() {
    // this.props.groceries <--- all the groceries
    const myGroceries = this.props.groceries;
    const mapGroceries = myGroceries.map(food => {
      return (
        <button className="col-10" key={food.claimId}>{food.foodName} , {food.qty}</button>
      );
    });

    console.log(myGroceries);
    return (
      <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2">
        <h1>-My Groceries-</h1>
        <div className="text-center">{mapGroceries}</div>
      </div>
    );
  }
}
