import React from 'react';

export default class Grocery extends React.Component {
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
    const product = this.props.foodprop;
    return product.map(foods => {
      return (
        <div key={foods.claimId} className="mt-2">
          <div className="card d-flex justify-content-around card-color">
            <div className="d-flex justify-content-around">
              <div className="col-5">
                {foods.foodName}
              </div>
              <div className="col-6">
                <p>Owner: {foods.userName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-around mb-2">
              <div className="col-5">
                <div>Quantity: {foods.qty}</div>
              </div>
              <div className="col-5 text-right">
                <i value={foods.claimId} onClick={() => this.changeScreenToSpecificFood(foods.claimId)} className="fas fa-chevron-right fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}
