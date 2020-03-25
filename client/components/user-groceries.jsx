import React from 'react';

export default class UserGroceries extends React.Component {

  render(props) {
    // this.props.groceries <--- all the groceries
    const myGroceries = this.props.groceries;
    return (
      <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2">
        <div className="mr-5">{myGroceries.foodName}</div><span>{myGroceries.quantity}</span>
      </div>
    );
  }
}
