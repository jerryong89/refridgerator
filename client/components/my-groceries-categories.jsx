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
  }

  // categoryChangeAll() {
  //   const setCategory = this.props.setView;
  //   setCategory('user-groceries');
  // }

  setCategory() {
    // this.setState = { view: user-groceries, group: something }
    this.setState({
      group: 'total-groceries'
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

  categoryMeat(userId, groupId) {
    fetch(`api/claims?userId=${userId}?groupId=${groupId}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        this.setState({
          groceries: result,
          group: 'meat',
          view: 'meat-groceries'
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
    } // filter by this.state.group

    if (this.state.group === 'meat' && this.state.view === 'meat-groceries') {
      return <UserGroceries groceries={this.state.groceries} />;
    }
    // filter the groceries based on the state group
    // pass the filtered list to the user groceries
    // return user groceries component passing the filtered list
    // pass a method down into the user groceries list to set the screen back to the group selection

    if (this.state.view === 'my-groceries-categories') {
      return (
        <div className="container d-flex flex-wrap justify-content-center col-10 mt-2 mb-2 pb-2 pt-2">
          <h1>-My Groceries-</h1>
          <h3>-Category-</h3>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Dairy</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Produce</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Frozen</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.categoryMeat}>Meats</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2">Etc.</button>
          <button className="bg-secondary text-white col-9 mt-2 mb-2 pb-2 pt-2" onClick={this.setCategory} >ALL</button>
        </div>
      );
    }

  }
}
