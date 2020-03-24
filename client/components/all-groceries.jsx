import React from 'react';
import Grocery from './grocery';

export default class AllGroceries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: []
    };
    this.getGrocery = this.getGrocery.bind(this);
  }

  getDairy() {
    fetch('/api/dairy')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          grocery: result
        });
      });
  }

  getProduce() {
    fetch('/api/produce')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          grocery: result
        });
      });
  }

  getFrozen() {
    fetch('/api/frozen')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          grocery: result
        });
      });
  }

  getMeats() {
    fetch('/api/meats')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          grocery: result
        });
      });
  }

  getEtc() {
    fetch('/api/etc')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          grocery: result
        });
      });
  }

  componentDidMount() {
    this.getGrocery();
  }

  componentDidUpdate() {
    // console.log('this state', this.state.grocery);
  }

  render() {
    return (
      <div className="chatBackground">
        <div className="container wave">
          <div className="row">
            <div className="col-8 column">
              <div className="buttonName"><button className="headerButton"></button>Dae Kim</div>
              <div className="buttonName"><button className="headerButton"></button>Create Fridge</div>
              <div className="buttonName"><button className="headerButton"></button>Join Fridge</div>
              <div className="buttonName"><button className="headerButton"></button>Add Member</div>
            </div>
            <div className="col-4 column">
              <button className="headerBiggerButton"></button>
              <div className="buttonName"> Garland Boys</div>
            </div>
          </div>
        </div>
        <h2 className="center">-ALL GROCERIES-</h2>
        <div className="buttonBody container">
          {this.state.grocery.map(groceries => <Grocery key={groceries.claimId} items={groceries}/>)}
          {/* <button type="button" className="groceryButton btn btn-secondary" dairy={this.state.grocery}>Dairy</button>
          <button type="button" className="groceryButton btn btn-secondary" produce={this.state.grocery}>Produce</button>
          <button type="button" className="groceryButton btn btn-secondary" frozen={this.state.grocery}>Frozen</button>
          <button type="button" className="groceryButton btn btn-secondary" meats={this.state.grocery}>Meats</button>
          <button type="button" className="groceryButton btn btn-secondary" etc={this.state.grocery}>Etc.</button> */}
        </div>
      </div>
    );
  }
}
