import React from 'react';

export default class HomeScreenHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="home-screen-header d-flex">
        <div className="col-6 header-left">
          <div>
            <div className="mt-1 d-flex align-items-center">
              <div className="user-icon"></div>
              <p className="ml-1">Dae Kim</p>
            </div>
          </div>
        </div>
        <div className="col-6 header-right">
          <div className="d-flex justify-content-center mt-3">
            <div className="client-fridge-logo"></div>
          </div>
          <h4 className="text-center">Garland Boys</h4>
        </div>
      </div>
    );
  }
}
