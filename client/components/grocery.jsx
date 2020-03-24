import React from 'react';

export default function Grocery(props) {
  // console.log('this is props', props.items);
  const product = props.items;
  return (
    <div className="groceryButton btn btn-secondary">{product.foodName}{product.userName}</div>
  );
}
