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
  }

  foodGroups() {
    return (
      <div className="text-center">
        <div className="mt-2">
          <button value="1" className="btn btn-secondary mt-5" onClick={this.selectedFoodGroup}>Produce</button>
        </div>
        <div className="mt-2">
          <button value="2" className="btn btn-secondary mt-5" onClick={this.selectedFoodGroup}>Dairy</button>
        </div>
        <div className="mt-2">
          <button value="3" className="btn btn-secondary mt-5" onClick={this.selectedFoodGroup}>Meat</button>
        </div>
        <div className="mt-2">
          <button value="4" className="btn btn-secondary mt-5" onClick={this.selectedFoodGroup}>Frozen</button>
        </div>
        <div className="mt-2">
          <button value="5" className="btn btn-secondary mt-5" onClick={this.selectedFoodGroup}>Misc</button>
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
          <div key={index} value={claims.claimId} className="mt-2">
            <div className="card d-flex justify-content-around card-color">
              <div className="d-flex justify-content-around">
                {claims.foodName}
                <p>Quantity: {claims.qty}</p>
              </div>
              <div className="text-center">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>{allClaims}</div>
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
              <div className="text-center">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>{allClaims}</div>
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
              <div className="text-center">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>{allClaims}</div>
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
              <div className="text-center">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>{allClaims}</div>
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
              <div className="text-center">Expires: {formattedDate}</div>
            </div>
          </div>
        );
      });
      return (
        <div>{allClaims}</div>
      );
    }
  }

  componentDidMount() {
    this.getAllClaims();
  }

  render() {
    return (
      <div className="container">
        {this.displayView()}
      </div >
    );
  }
}
