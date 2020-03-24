import React from 'react';

export default class MyGroceriesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'my-grcoeries-categories'
    };
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">-My Groceries-</h1>
        <h2 className="text-center">-Categories</h2>
      </div>,
      <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2 pb-2 pt-2">
        <h1>-My Groceries-</h1>
        <h3>-Category-</h3>
        <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Dairy</button>
        <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Produce</button>
        <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Frozen</button>
        <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Meats</button>
        <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Etc.</button>
      </div>
    );
  }
}
