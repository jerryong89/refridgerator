import React from 'react';

export default class AddFoodScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeId: this.props.fridge.fridgeId,
      userId: this.props.user.userId,
      groupId: '',
      foodName: '',
      qty: '',
      expirationDate: ''
    };
    this.changeToMyFridgeScreen = this.changeToMyFridgeScreen.bind(this);
    this.handleFoodNameInput = this.handleFoodNameInput.bind(this);
    this.handleFoodGroupInput = this.handleFoodGroupInput.bind(this);
    this.handleQuantityInput = this.handleQuantityInput.bind(this);
    this.handleDateInput = this.handleDateInput.bind(this);
    this.addFoodClaim = this.addFoodClaim.bind(this);
  }

  changeToMyFridgeScreen() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  handleFoodNameInput(event) {
    event.preventDefault();
    this.setState({
      foodName: event.currentTarget.value
    });
  }

  handleFoodGroupInput(event) {
    event.preventDefault();
    this.setState({
      groupId: event.currentTarget.value
    });
  }

  handleQuantityInput(event) {
    event.preventDefault();
    this.setState({
      qty: event.currentTarget.value
    });
  }

  handleDateInput(event) {
    event.preventDefault();
    this.setState({
      expirationDate: event.currentTarget.value
    });
  }

  addFoodClaim(event) {
    const allClaimsInfo = {
      userId: this.state.userId,
      groupId: this.state.groupId,
      foodName: this.state.foodName,
      qty: this.state.qty,
      expirationDate: this.state.expirationDate
    };
    event.preventDefault();
    fetch('/api/claims', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(allClaimsInfo)
    })
      .then(response => {
        return response.json();
      }).then(result => {
        const setViewMethod = this.props.setView;
        setViewMethod('my-fridge-screen');
      });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center test">
        <div className="col-10 d-flex justify-content-center">
          <form>
            <div className="mt-4">
              <p>Food Name:</p>
              <input type="text" onChange={this.handleFoodNameInput}/>
            </div>
            <div className="mt-4">
              <p>Food Group:</p>
              <select name="food-groups" id="food-groups" className="food-group-dropdown" onChange={this.handleFoodGroupInput}>
                <option value="default">Choose Food Group</option>
                <option value="1">Produce</option>
                <option value="2">Dairy</option>
                <option value="3">Meat</option>
              </select>
            </div>
            <div className="mt-4">
              <p>Quantity:</p>
              <input type="number" onChange={this.handleQuantityInput}/>
            </div>
            <div className="mt-4">
              <p>Expiration Date:</p>
              <input type="date" onChange={this.handleDateInput}/>
            </div>
            <div className="mt-4">
              <p>Owner:</p>
              <p>{this.props.user.userName}</p>
            </div>
            <div className="mt-4">
              <div>
                <button className="btn btn-success m-2" onClick={this.addFoodClaim}>Add Item</button>
                <button className="btn btn-danger m-2" onClick={this.changeToMyFridgeScreen}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
