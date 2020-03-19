import React from 'react';

export default class MemberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeViewNewMember = this.changeViewNewMember.bind(this);
  }

  changeViewNewMember(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('new-member-login-screen');
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form>
            <label htmlFor="">
              <button className="btn btn-secondary" onClick={this.changeViewNewMember}>New Member</button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
