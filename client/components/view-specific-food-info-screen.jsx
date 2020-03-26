import React from 'react';

export default class ViewSpecificFoodInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: ''
    };
    this.getFoodInfo = this.getFoodInfo.bind(this);
    this.formatTime = this.formatTime.bind(this);
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
        <p>{formattedDate}</p>
      );
    }
  }

  render() {
    return (
      <div className="container test">
        <div className="col-10">
          <div className="pt-3">
            <h5>Food:</h5>
            <p>{this.state.foodInfo.foodName}</p>
          </div>
          <div className="pt-3">
            <h5>Quantity:</h5>
            <p>{this.state.foodInfo.qty}</p>
          </div>
          <div className="pt-3">
            <h5>Expiration:</h5>
            {this.formatTime()}
          </div>
          <div className="pt-3">
            <h5>Owner:</h5>
            <p>{this.state.foodInfo.userName}</p>
          </div>
        </div>
        <div className="mt-5">
          <button className="btn btn-danger">Remove Item</button>
        </div>
      </div>
    );
  }
}
