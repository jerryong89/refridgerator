import React from 'react';

export default class AddMemberToFridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center flex-wrap test">
        <div className="">
          <div className="col-12">
            <input type="text"/>
          </div>
          <div className="mt-4">
            <button className="btn btn-secondary">Add Member To Fridge</button>
          </div>
        </div>
      </div>
    );
  }
}
