import React from 'react';

export default class MemberLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center mt-5">
          <form>
            <label htmlFor="">
              <button className="btn btn-secondary">New Member</button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
