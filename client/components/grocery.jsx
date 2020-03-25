import React from 'react';

export default function Grocery(props) {
  const product = props.foodprop;
  return product.map(foods => {
    return (
      <div key={foods.claimId} value={foods.claimId} className="mt-2">
        <div className="card d-flex justify-content-around card-color">
          <div className="d-flex justify-content-around">
            {foods.foodName}
            <p>{foods.userName}</p>
          </div>
        </div>
      </div>
    );
  });
}
