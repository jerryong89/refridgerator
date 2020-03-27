import React from 'react';
import Grocery from './grocery';

export default class AllGroceries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grocery: [],
      view: 'main'
    };
    this.getDairy = this.getDairy.bind(this);
    this.getProduce = this.getProduce.bind(this);
    this.getFrozen = this.getFrozen.bind(this);
    this.getMeats = this.getMeats.bind(this);
    this.getEtc = this.getEtc.bind(this);
    this.setView = this.setView.bind(this);
    this.displayView = this.displayView.bind(this);
    this.changeViewCreateScreen = this.changeViewCreateScreen.bind(this);
    this.dairy = this.dairy.bind(this);
    this.produce = this.produce.bind(this);
    this.meat = this.meat.bind(this);
    this.etc = this.etc.bind(this);
    this.frozen = this.frozen.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.backToAllGroceries = this.backToAllGroceries.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  changeViewCreateScreen(event) {
    const setViewMethod = this.setView;
    setViewMethod('groceryList');
  }

  dairy() {
    this.getDairy();
    this.changeViewCreateScreen();
  }

  produce() {
    this.getProduce();
    this.changeViewCreateScreen();
  }

  frozen() {
    this.getFrozen();
    this.changeViewCreateScreen();
  }

  meat() {
    this.getMeats();
    this.changeViewCreateScreen();
  }

  etc() {
    this.getEtc();
    this.changeViewCreateScreen();
  }

  backToPrevious() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  backToAllGroceries() {
    const setViewMethod = this.setView;
    setViewMethod('main');
  }

  displayView() {
    if (this.state.view === 'main') {
      return (
        <div className="buttonBody container">
          <button type="button" className="groceryButton btn btn-secondary" onClick={this.dairy} foodprop={this.state.grocery} >Dairy</button>
          <button type="button" className="groceryButton btn btn-secondary" onClick={this.produce}>Produce</button>
          <button type="button" className="groceryButton btn btn-secondary" onClick={this.frozen}>Frozen</button>
          <button type="button" className="groceryButton btn btn-secondary" onClick={this.meat}>Meats</button>
          <button type="button" className="groceryButton btn btn-secondary" onClick={this.etc}>Etc.</button>
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={this.backToPrevious}>Back</button>
          </div>
        </div>
      );
    } else if (this.state.view === 'groceryList') {
      return (
        <div>
          <Grocery foodprop={this.state.grocery} setView={this.props.setView} setClaimId={this.props.setClaimId}/>
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={this.backToAllGroceries}>Back</button>
          </div>
        </div >
      );
    }
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

  render() {
    return (
      <div className="chatBackground">
        <h2 className="center">-ALL GROCERIES-</h2>
        <div className="container">
          {this.displayView()}
        </div>
      </div>
    );
  }
}
