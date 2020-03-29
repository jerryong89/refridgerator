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
        <div key={food.claimId} className="mt-2 cursive-font d-flex justify-content-center">
          <div className="card all-items-card d-flex justify-content-between card-color">
            <div className="d-flex justify-content-center">
              <h6 className="bold-font">{food.foodName}</h6>
            </div>
            <div className="d-flex justify-content-around mb-2">
              <div className="col-4">
                <div>Qty: {food.qty}</div>
              </div>
              <div className="col-6">
                <p>Owner: {food.userName}</p>
              </div>
              <div className="col-2 text-right">
                <i value={food.claimId} onClick={() => this.changeScreenToSpecificFood(food.claimId)} className="fas fa-chevron-right fa-1x"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="text-center">
          <h2 className="header-font">My Groceries</h2>
          <h4 className="header-font">{this.props.title}</h4>
        </div>
        <div>{mapGroceries}</div>
      </div>
    );
  }
}
