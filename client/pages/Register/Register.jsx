import React, { Component } from 'react';
import UserLogin from './components/UserLogin';
import AuthorityTable from './components/AuthorityTable';
// import './Register.scss';

export default class Register extends Component {
  static displayName = 'Register';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login">
        <AuthorityTable />
        <UserLogin />
      </div>
    );
  }
}
