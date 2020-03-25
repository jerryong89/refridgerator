import React from 'react';

export default function Grocery(props) {
  const product = props.foodprop;
  return product.map(foods => {
    return (
      <div key={foods.claimId}>
        <button className="groceryButton btn btn-secondary">{foods.foodName}{foods.userName}</button>
      </div>
    );
  });
}
