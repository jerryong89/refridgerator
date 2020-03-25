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

  frozenCategor() {
    this.setState({
      group: 'frozen-groceries'
    });
  }

  miscCategory() {
    this.setState({
      group: 'misc-groceries'
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
    console.log(this.state);

    if (this.state.group === 'total-groceries' && this.state.view === 'my-groceries-categories') {
      return <UserGroceries groceries={this.state.groceries} />;
    }

    if (this.state.group === 'meat-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedMeat = this.state.groceries.filter(food => food.groupId === 3);
      return <UserGroceries groceries={sortedMeat} />;
    }

    if (this.state.group === 'produce-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedProduce = this.state.groceries.filter(food => food.groupId === 1);
      return <UserGroceries groceries={sortedProduce} />;
    }

    if (this.state.group === 'dairy-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedDairy = this.state.groceries.filter(food => food.groupId === 2);
      return <UserGroceries groceries={sortedDairy} />;
    }

    if (this.state.group === 'frozen-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedFrozen = this.state.groceries.filter(food => food.groupId === 4);
      return <UserGroceries groceries={sortedFrozen} />;
    }

    if (this.state.group === 'misc-groceries' && this.state.view === 'my-groceries-categories') {
      const sortedMisc = this.state.groceries.filter(food => food.groupId === 5);
      return <UserGroceries groceries={sortedMisc} />;
    }

    if (this.state.view === 'my-groceries-categories') {
      return (
        <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2 pb-2 pt-2">
          <h1>-My Groceries-</h1>
          <h3>-Category-</h3>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.dairyCategory}>Dairy</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.produceCategory}>Produce</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.frozenCategory}>Frozen</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.meatCategory}>Meats</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.miscCategory}>Etc.</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.setCategory} >ALL</button>
        </div>
      );
    }

  }
}
