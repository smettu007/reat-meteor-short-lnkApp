import React, { Component } from "react";
import PropTypes from "prop-types";
import { Accounts } from "meteor/accounts-base";

class PrivateHeader extends Component {
  onLogout = () => {
    Accounts.logout();
  };
  render() {
    return (
      <div className="header">
        <div className="header__content">
          <h1 className="header__title">{this.props.title}</h1>
          <button className="button button--link-text" onClick={this.onLogout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default PrivateHeader;

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};
