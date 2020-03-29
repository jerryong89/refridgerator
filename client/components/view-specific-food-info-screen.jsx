import React from 'react';

export default class ViewSpecificFoodInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: '',
      updateInput: false,
      newQty: ''
    };
    this.getFoodInfo = this.getFoodInfo.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.deleteFood = this.deleteFood.bind(this);
    this.updateFoodInput = this.updateFoodInput.bind(this);
    this.showInput = this.showInput.bind(this);
    this.updateButtonChoice = this.updateButtonChoice.bind(this);
    this.handleNewQtyInput = this.handleNewQtyInput.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.handleUpdateQtyClick = this.handleUpdateQtyClick.bind(this);
  }

  getFoodInfo() {
    fetch(`/api/claims/${this.props.specificClaimId}`)
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          foodInfo: result
        });
      });
  }

  deleteFood(event) {
    event.preventDefault();
    fetch(`/api/claims/${this.state.foodInfo.claimId}`, {
      method: 'DELETE'
    })
      .then(response => {
        return response;
      })
      .then(result => {
        const setViewMethod = this.props.setView;
        setViewMethod('my-fridge-screen');
      })
      .then(() => this.props.updateTotal());
  }

  updateFood() {
    const claimId = this.state.foodInfo.claimId;
    const newQty = {
      qty: this.state.newQty
    };
    fetch(`/api/claims/${claimId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQty)
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        const setViewMethod = this.props.setView;
        this.setState({
          foodInfo: result
        });
        setViewMethod('view-specific-food-screen');
      });
  }

  handleNewQtyInput(event) {
    event.preventDefault();
    this.setState({
      newQty: event.currentTarget.value
    });
  }

  componentDidMount() {
    this.getFoodInfo();
  }

  formatTime() {
    if (!this.state.foodInfo) {
      return (
        <div>

        </div>
      );
    } else {
      const datetime = new Date(this.state.foodInfo.expirationDate);
      const date = datetime.toISOString().split('T')[0];
      const splitDate = date.split('-');
      const formattedDate = `${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`;
      return (
        <p className="specific-food-font">{formattedDate}</p>
      );
    }
  }

  updateFoodInput() {
    if (this.state.updateInput === true) {
      return (
        <input type="number" placeholder={this.state.foodInfo.qty} onChange={this.handleNewQtyInput}/>
      );
    } else {
      return (
        <p className="specific-food-font">{this.state.foodInfo.qty}</p>
      );
    }
  }

  handleUpdateQtyClick(event) {
    event.preventDefault();
    this.updateFood();
    this.showInput();
  }

  showInput() {
    if (this.state.updateInput === true) {
      this.setState({
        updateInput: false
      });
    } else {
      this.setState({
        updateInput: true
      });
    }
  }

  updateButtonChoice() {
    if (this.state.updateInput === true) {
      return (
        <button className="btn btn-warning button-format button-3d-yellow action-button animate" onClick={this.handleUpdateQtyClick}>Update</button>
      );
    } else {
      return (
        <button className="btn btn-success button-format button-3d-green action-button animate" onClick={this.showInput}>Update Item</button>
      );
    }
  }

  render() {
    return (
      <div>
        <h2 className="header-font mt-4 text-center">Food Details</h2>
        <div className="container test d-flex justify-content-center align-items-center">
          <div className="specific-food-background p-3">
            <div className="col-12 text-center">
              <div className="pt-3">
                <h5 className="bold-font">Food:</h5>
                <p className="specific-food-font">{this.state.foodInfo.foodName}</p>
              </div>
              <div className="pt-3">
                <h5 className="bold-font">Quantity:</h5>
                {this.updateFoodInput()}
              </div>
              <div className="pt-3">
                <h5 className="bold-font">Expiration:</h5>
                {this.formatTime()}
              </div>
              <div className="pt-3">
                <h5 className="bold-font">Owner:</h5>
                <p className="specific-food-font">{this.state.foodInfo.userName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="mt-5 col-12 d-flex justify-content-around">
                <div>
                  {this.updateButtonChoice()}
                </div>
                <div>
                  <button className="btn btn-danger button-format button-3d-red action-button animate" onClick={this.deleteFood}>Remove Item</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
