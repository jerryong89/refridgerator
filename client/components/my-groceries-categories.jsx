import React from 'react';
import UserGroceries from './user-groceries';

export default class MyGroceriesCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'my-groceries-categories',
      group: 'All',
      groceries: []
    };
    this.setCategory = this.setCategory.bind(this);
    this.categoryAll = this.categoryAll.bind(this);
    this.meatCategory = this.meatCategory.bind(this);
    this.produceCategory = this.produceCategory.bind(this);
    this.dairyCategory = this.dairyCategory.bind(this);
    this.frozenCategory = this.frozenCategory.bind(this);
    this.miscCategory = this.miscCategory.bind(this);
    this.backToPrevious = this.backToPrevious.bind(this);
    this.backToAll = this.backToAll.bind(this);
  }

  setCategory() {
    this.setState({
      group: 'total-groceries'
    });
  }

  meatCategory() {
    this.setState({
      group: 'meat-groceries'
    });
  }

  produceCategory() {
    this.setState({
      group: 'produce-groceries'
    });
  }

  dairyCategory() {
    this.setState({
      group: 'dairy-groceries'
    });
  }

  frozenCategory() {
    this.setState({
      group: 'frozen-groceries'
    });
  }

  miscCategory() {
    this.setState({
      group: 'misc-groceries'
    });
  }

  backToPrevious() {
    const setViewMethod = this.props.setView;
    setViewMethod('my-fridge-screen');
  }

  backToAll() {
    this.setState({
      group: 'all'
    });
  }

  categoryAll(userId) {
    fetch(`api/claims?userId=${userId}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          groceries: result
        });
      });
  }

  componentDidMount() {
    this.categoryAll(this.props.user.userId);
  }

  render() {
    if (this.state.group === 'total-groceries' && this.state.view === 'my-groceries-categories') {
      const title = 'All';
      return (
        <div>
          <UserGroceries groceries={this.state.groceries} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView}/>
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.group === 'meat-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedMeat = this.state.groceries.filter(food => food.groupId === 3);
      const title = 'Meats';
      return (
        <div>
          <UserGroceries groceries={sortedMeat} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.group === 'produce-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedProduce = this.state.groceries.filter(food => food.groupId === 1);
      const title = 'Produce';
      return (
        <div>
          <UserGroceries groceries={sortedProduce} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.group === 'dairy-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedDairy = this.state.groceries.filter(food => food.groupId === 2);
      const title = 'Dairy';
      return (
        <div>
          <UserGroceries groceries={sortedDairy} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.group === 'frozen-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedFrozen = this.state.groceries.filter(food => food.groupId === 4);
      const title = 'Frozen';
      return (
        <div>
          <UserGroceries groceries={sortedFrozen} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.group === 'misc-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedMisc = this.state.groceries.filter(food => food.groupId === 5);
      const title = 'Misc';
      return (
        <div>
          <UserGroceries groceries={sortedMisc} title={title} setClaimId={this.props.setClaimId} setView={this.props.setView} />
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToAll}>Back</button>
          </div>
        </div>
      );
    }

    if (this.state.view === 'my-groceries-categories') {
      return (
        <div className="container text-center">
          <div>
            <h2 className="header-font mt-2">My Groceries</h2>
            <h3 className="header-font">Category</h3>
          </div>
          <div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.dairyCategory}>
                <i className="fas fa-cheese col-2 d-flex justify-content-center"></i>
                Dairy
                <i className="fas fa-cheese col-2 d-flex justify-content-center"></i>
              </button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.produceCategory}>
                <i className="fas fa-apple-alt d-flex justify-content-center"></i>
                Produce
                <i className="fas fa-apple-alt d-flex justify-content-center"></i>
              </button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.frozenCategory}>
                <i className="fas fa-ice-cream d-flex justify-content-center"></i>
                Frozen
                <i className="fas fa-ice-cream d-flex justify-content-center"></i>
              </button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.meatCategory}>
                <i className="fas fa-bacon d-flex justify-content-center"></i>
                Meats
                <i className="fas fa-bacon d-flex justify-content-center"></i>
              </button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.miscCategory}>
                <i className="fas fa-pizza-slice d-flex justify-content-center"></i>
                Etc.
                <i className="fas fa-pizza-slice d-flex justify-content-center"></i>
              </button>
            </div>
            <div className="mt-2 d-flex justify-content-center">
              <button className="btn btn-secondary button-format mt-1 my-fridge-screen-button d-flex justify-content-between" onClick={this.setCategory}>
                <i className="fas fa-box-open d-flex justify-content-center"></i>
                ALL
                <i className="fas fa-box-open d-flex justify-content-center"></i>
              </button>
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-danger button-format" onClick={this.backToPrevious}>Back</button>
          </div>
        </div>
      );
    }

  }
}
