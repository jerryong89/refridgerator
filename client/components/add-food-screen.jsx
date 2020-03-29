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
      })
      .then(() => this.props.updateTotal());
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h2 className="header-font mt-3">Add Food</h2>
        </div>
        <div className="container d-flex justify-content-center test">
          <div className="col-10 d-flex justify-content-center align-items-center cursive-font">
            <form>
              <div className="mt-4">
                <p className="add-food-font">Food Name:</p>
                <input type="text" className="w-100" onChange={this.handleFoodNameInput}/>
              </div>
              <div className="mt-4">
                <p className="add-food-font">Food Group:</p>
                <select name="food-groups" id="food-groups" className="food-group-dropdown w-100" onChange={this.handleFoodGroupInput}>
                  <option value="default">Choose Food Group</option>
                  <option value="1">Produce</option>
                  <option value="2">Dairy</option>
                  <option value="3">Meat</option>
                  <option value="4">Frozen</option>
                  <option value="5">Misc.</option>
                </select>
              </div>
              <div className="mt-4">
                <p className="add-food-font">Quantity:</p>
                <input type="number" className="w-25" onChange={this.handleQuantityInput}/>
              </div>
              <div className="mt-4">
                <p className="add-food-font">Expiration Date:</p>
                <input type="date" className="w-100" onChange={this.handleDateInput} />
              </div>
              <div className="mt-4">
                <p className="add-food-font">Owner:</p>
                <p className="add-food-font">{this.props.user.userName}</p>
              </div>
              <div className="mt-4">
                <div>
                  <button className="btn btn-success m-2 button-format button-3d-green action-button animate" onClick={this.addFoodClaim}>Add Item</button>
                  <button className="btn btn-danger m-2 button-format button-3d-red action-button animate" onClick={this.changeToMyFridgeScreen}>Cancel</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
