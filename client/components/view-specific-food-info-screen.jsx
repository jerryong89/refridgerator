import React from 'react';

export default class ViewSpecificFoodInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodInfo: {}
    };
    this.getFoodInfo = this.getFoodInfo.bind(this);
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

  render() {
    return (
      <div className="container test">
        <div className="col-10">
          <div className="mt-3">
            <p>Food:</p>
            <p>{this.state.foodInfo.foodName}</p>
          </div>
        </div>
      </div>
    );
  }
}
