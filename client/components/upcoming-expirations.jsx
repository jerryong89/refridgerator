import React from 'react';

export default class UpcomingExpirationsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodGroupsView: true,
      expirationDateView: false,
      selectedFoodGroup: '',
      allItems: []
    };
    this.displayView = this.displayView.bind(this);
    this.foodGroups = this.foodGroups.bind(this);
    this.selectedFoodGroup = this.selectedFoodGroup.bind(this);
    this.getAllClaims = this.getAllClaims.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.backToGroups = this.backToGroups.bind(this);
  }

  foodGroups() {
    return (
      <div className="text-center">
        <div className="mt-4 d-flex justify-content-center">
          <button value="1" className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.selectedFoodGroup}>
            <i className="fas fa-apple-alt d-flex justify-content-center"></i>
            Produce
            <i className="fas fa-apple-alt d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button value="2" className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.selectedFoodGroup}>
            <i className="fas fa-cheese col-2 d-flex justify-content-center"></i>
            Dairy
            <i className="fas fa-cheese col-2 d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button value="3" className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.selectedFoodGroup}>
            <i className="fas fa-bacon d-flex justify-content-center"></i>
            Meat
            <i className="fas fa-bacon d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button value="4" className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.selectedFoodGroup}>
            <i className="fas fa-ice-cream d-flex justify-content-center"></i>
            Frozen
            <i className="fas fa-ice-cream d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="mt-2 d-flex justify-content-center">
          <button value="5" className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.selectedFoodGroup}>
            <i className="fas fa-pizza-slice d-flex justify-content-center"></i>
            Etc.
            <i className="fas fa-pizza-slice d-flex justify-content-center"></i>
          </button>
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-danger button-format" onClick={this.backToPrevious}>Back</button>
        </div>
      </div>
    );
  }

  selectedFoodGroup(event) {
    event.preventDefault();
    this.setState({
      foodGroupsView: false,
      selectedFoodGroup: event.currentTarget.value,
      expirationDateView: true
    });
  }

  getAllClaims() {
    fetch('/api/expirations')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          allItems: result
        });
      });
  }

  displayView() {
    if (this.state.foodGroupsView === true) {
      return (
        this.foodGroups()
      );
    } else if (this.state.selectedFoodGroup === '1') {
      const allClaimsArray = this.state.allItems;
      const foodGroupSortedArray = allClaimsArray.filter(foodInfo => foodInfo.groupId === 1);
      const allClaims = foodGroupSortedArray.map((claims, index) => {
        const datetime = new Date(claims.expirationDate);
        const date = datetime.toISOString().split('T')[0];
        const splitDate = date.split('-');
        const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
        return (
          <div key={index} value={claims.claimId} className="mt-2 cursive-font">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                <h6 className="bold-font">{claims.foodName}</h6>
                <p>Qty: {claims.qty}</p>
              </div>
              <div className="text-center expiration-font">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {allClaims}
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToGroups}>Back</button>
          </div>
        </div>
      );
    } else if (this.state.selectedFoodGroup === '2') {
      const allClaimsArray = this.state.allItems;
      const foodGroupSortedArray = allClaimsArray.filter(foodInfo => foodInfo.groupId === 2);
      const allClaims = foodGroupSortedArray.map((claims, index) => {
        const datetime = new Date(claims.expirationDate);
        const date = datetime.toISOString().split('T')[0];
        const splitDate = date.split('-');
        const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
        return (
          <div key={index} value={claims.claimId} className="mt-2">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                {claims.foodName}
                <p>Quantity: {claims.qty}</p>
              </div>
              <div className="text-center expiration-font">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {allClaims}
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToGroups}>Back</button>
          </div>
        </div>
      );
    } else if (this.state.selectedFoodGroup === '3') {
      const allClaimsArray = this.state.allItems;
      const foodGroupSortedArray = allClaimsArray.filter(foodInfo => foodInfo.groupId === 3);
      const allClaims = foodGroupSortedArray.map((claims, index) => {
        const datetime = new Date(claims.expirationDate);
        const date = datetime.toISOString().split('T')[0];
        const splitDate = date.split('-');
        const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
        return (
          <div key={index} value={claims.claimId} className="mt-2">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                {claims.foodName}
                <p>Quantity: {claims.qty}</p>
              </div>
              <div className="text-center expiration-font">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {allClaims}
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToGroups}>Back</button>
          </div>
        </div>
      );
    } else if (this.state.selectedFoodGroup === '4') {
      const allClaimsArray = this.state.allItems;
      const foodGroupSortedArray = allClaimsArray.filter(foodInfo => foodInfo.groupId === 4);
      const allClaims = foodGroupSortedArray.map((claims, index) => {
        const datetime = new Date(claims.expirationDate);
        const date = datetime.toISOString().split('T')[0];
        const splitDate = date.split('-');
        const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
        return (
          <div key={index} value={claims.claimId} className="mt-2">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                {claims.foodName}
                <p>Quantity: {claims.qty}</p>
              </div>
              <div className="text-center expiration-font">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {allClaims}
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToGroups}>Back</button>
          </div>
        </div>
      );
    } else if (this.state.selectedFoodGroup === '5') {
      const allClaimsArray = this.state.allItems;
      const foodGroupSortedArray = allClaimsArray.filter(foodInfo => foodInfo.groupId === 5);
      const allClaims = foodGroupSortedArray.map((claims, index) => {
        const datetime = new Date(claims.expirationDate);
        const date = datetime.toISOString().split('T')[0];
        const splitDate = date.split('-');
        const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
        return (
          <div key={index} value={claims.claimId} className="mt-2">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                {claims.foodName}
                <p>Quantity: {claims.qty}</p>
              </div>
              <div className="text-center expiration-font">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {allClaims}
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToGroups}>Back</button>
          </div>
        </div>
      );
    }
  }

  backToPrevious() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  backToGroups() {
    this.setState({
      foodGroupsView: true
    });
  }

  componentDidMount() {
    this.getAllClaims();
  }

  render() {
    return (
      <div className="container all-items-card">
        <h2 className="header-font text-center mt-3 mb-3">Upcoming Expirations</h2>
        {this.displayView()}
      </div >
    );
  }
}
