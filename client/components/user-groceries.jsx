import React from 'react';

export default class UserGroceries extends React.Component {

  render() {
    // this.props.groceries <--- all the groceries
    const myGroceries = this.props.groceries;
    const mapGroceries = myGroceries.map(food => {
      return (
        <div key={food.claimId}>{food.foodName}</div>
      );
    });
    console.log(myGroceries);
    return (
      <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2">
        <h1 className="mr-5">{mapGroceries}</h1>
      </div>
    );
  }
}
