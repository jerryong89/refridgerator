import React from 'react';

export default class MemberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeViewNewMember = this.changeViewNewMember.bind(this);
    this.changeViewExistingMember = this.changeViewExistingMember.bind(this);
  }

  changeViewNewMember(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('new-member-login-screen');
  }

  changeViewExistingMember(event) {
    event.preventDefault();
    const setViewMethod = this.props.setView;
    setViewMethod('existing-member-login-screen');
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form className="text-center">
            <label htmlFor="">
              <button className="btn btn-secondary button-format" onClick={this.changeViewNewMember}>New Member</button>
            </label>
            <div className="mt-3">
              <label htmlFor="">
                <button className="btn btn-secondary button-format" onClick={this.changeViewExistingMember}>Existing Member</button>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
