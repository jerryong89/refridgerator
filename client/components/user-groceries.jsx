import React from 'react';

export default class UserGroceries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeScreenToSpecificFood = this.changeScreenToSpecificFood.bind(this);
  }

  changeScreenToSpecificFood(value) {
    event.preventDefault();
    const setClaimIdMethod = this.props.setClaimId;
    setClaimIdMethod(value);
    const setViewMethod = this.props.setView;
    setViewMethod('view-specific-food-screen');
  }

  render() {
    const myGroceries = this.props.groceries;
    const mapGroceries = myGroceries.map(food => {
      return (
        <div key={food.claimId} className="mt-2">
          <div className="card d-flex justify-content-around card-color">
            <div className="d-flex justify-content-around">
              <div className="col-5">
                {food.foodName}
              </div>
              <div className="col-6">
                <p>Owner: {food.userName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-around mb-2">
              <div className="col-5">
                <div>Quantity: {food.qty}</div>
              </div>
              <div className="col-5 text-right">
                <i value={food.claimId} onClick={() => this.changeScreenToSpecificFood(food.claimId)} className="fas fa-chevron-right fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="text-center">
          <h1>-My Groceries-</h1>
          <h2>-{this.props.title}-</h2>
        </div>
        <div>{mapGroceries}</div>
      </div>
    );
  }
}
