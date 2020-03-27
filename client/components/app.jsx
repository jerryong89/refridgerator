import React from 'react';
import FridgeChat from './fridgechat';
import LoginHeader from './login-header';
import LoginScreen from './login-screen';
import CreateFridgeScreen from './create-fridge-screen';
import MemberLoginScreen from './member-login-screen';
import NewMemberLoginScreen from './new-member-login-screen';
import ExistingMemberLoginScreen from './existing-member-login-screen';
import MyFridgeScreen from './my-fridge-screen';
import AllGroceries from './all-groceries';
import HomeScreenHeader from './home-screen-header';
import AddFoodScreen from './add-food-screen';
import AddMemberToFridge from './add-member-to-fridge';
import ViewFridgeMembers from './view-fridge-members';
import MyGroceriesCategories from './my-groceries-categories';
import UpcomingExpirationsScreen from './upcoming-expirations';
import ViewSpecificFoodInfoScreen from './view-specific-food-info-screen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fridgeName: null,
      fridge: {
        fridgeId: '',
        fridgeName: ''
      },
      user: {
        userId: '',
        userName: ''
      },
      view: 'start-screen',
      loginError: false,
      specificClaimId: '',
      itemTotal: [],
      userTotal: []
    };
    this.setView = this.setView.bind(this);
    this.displayView = this.displayView.bind(this);
    this.createFridge = this.createFridge.bind(this);
    this.getFridges = this.getFridges.bind(this);
    this.loginError = this.loginError.bind(this);
    this.createNewMember = this.createNewMember.bind(this);
    this.setExistingMember = this.setExistingMember.bind(this);
    this.setClaimId = this.setClaimId.bind(this);
    this.getItemTotal = this.getItemTotal.bind(this);
    this.getUserTotal = this.getUserTotal.bind(this);
    this.updateTotals = this.updateTotals.bind(this);
  }

  setView(name) {
    this.setState({
      view: name
    });
  }

  setExistingMember(clientUserId, clientUserName) {
    this.setState({
      user: {
        userId: clientUserId,
        userName: clientUserName
      }
    });
  }

  setClaimId(claimId) {
    this.setState({
      specificClaimId: claimId
    });
  }

  displayView() {
    if (this.state.view === 'start-screen') {
      return (
        <div>
          <LoginHeader />
          {this.loginError()}
          <LoginScreen setView={this.setView} getFridges={this.getFridges}/>
        </div>
      );
    } else if (this.state.view === 'create-screen') {
      return (
        <div>
          <LoginHeader />
          <CreateFridgeScreen setView={this.setView} createFridgeMethod={this.createFridge} />
        </div>
      );
    } else if (this.state.view === 'member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <MemberLoginScreen setView={this.setView} />
        </div>
      );
    } else if (this.state.view === 'new-member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <NewMemberLoginScreen setView={this.setView} createNewMember={this.createNewMember}/>
        </div>
      );
    } else if (this.state.view === 'existing-member-login-screen') {
      return (
        <div>
          <LoginHeader />
          <ExistingMemberLoginScreen setView={this.setView} setExistingMember={this.setExistingMember}/>
        </div>
      );
    } else if (this.state.view === 'my-fridge-screen') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <MyFridgeScreen setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'add-food-screen') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <AddFoodScreen setView={this.setView} fridge={this.state.fridge} user={this.state.user} updateTotal={this.updateTotals}/>
        </div>
      );
    } else if (this.state.view === 'add-member-to-fridge-screen') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <AddMemberToFridge setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'view-all-fridge-members') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <ViewFridgeMembers setView={this.setView} fridge={this.state.fridge} user={this.state.user}/>
        </div>
      );
    } else if (this.state.view === 'my-groceries-categories') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <MyGroceriesCategories setView={this.setView} fridge={this.state.fridge} user={this.state.user} setClaimId={this.setClaimId}/>
        </div>
      );
    } else if (this.state.view === 'view-all-groceries') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <AllGroceries setView={this.setView} setClaimId={this.setClaimId}/>
        </div>
      );
    } else if (this.state.view === 'view-fridge-chat') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal} updateTotal={this.updateTotals}/>
          <FridgeChat user={this.state.fridge}/>
        </div>
      );
    } else if (this.state.view === 'upcoming-expirations-screen') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} />
          <UpcomingExpirationsScreen setView={this.setView}/>
        </div>
      );
    } else if (this.state.view === 'view-specific-food-screen') {
      return (
        <div>
          <HomeScreenHeader setView={this.setView} fridge={this.state.fridge} user={this.state.user} setExistingMember={this.setExistingMember} totalItems={this.state.itemTotal} userTotal={this.state.userTotal}/>
          <ViewSpecificFoodInfoScreen setView={this.setView} specificClaimId={this.state.specificClaimId} updateTotal={this.updateTotals}/>
        </div>
      );
    }
  }

  loginError() {
    if (this.state.loginError === true) {
      return (
        <p className="text-center loginError">Please Enter An Existing Fridge Name</p>
      );
    }
  }

  getFridges(clientFridgeName) {
    event.preventDefault();
    fetch(`/api/fridges/${clientFridgeName}`)
      .then(response => {
        return response.json();
      }).then(result => {
        if (result.error) {
          this.setState({
            loginError: true
          });
        } else {
          this.setState({
            fridge: {
              fridgeId: result,
              fridgeName: clientFridgeName
            },
            loginError: false,
            view: 'member-login-screen'
          });
        }
      });
  }

  createFridge(clientFridgeName) {
    fetch('/api/fridges/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientFridgeName)
    }).then(response => {
      return (response.json());
    }).then(result => {
      this.setState({
        fridge: {
          fridgeId: result.fridgeId,
          fridgeName: result.fridgeName
        }
      });
    });
  }

  createNewMember(clientUserName) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clientUserName)
    }).then(response => {
      return (response.json());
    }).then(result => {
      this.setState({
        user: {
          userId: result.userId,
          userName: result.userName
        }
      });
    });
  }

  getItemTotal() {
    fetch('/api/fridgeTotal')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          itemTotal: result
        });
      });
  }

  getUserTotal() {
    fetch('/api/userTotal')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          userTotal: result
        });
      });
  }

  componentDidMount() {
    this.updateTotals();
  }

  updateTotals() {
    this.getItemTotal();
    this.getUserTotal();
  }

  render() {
    return (
      <div>
        {this.displayView()}
      </div>
    );
  }
}
