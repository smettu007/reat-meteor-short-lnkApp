import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Accounts} from 'meteor/accounts-base'

class PrivateHeader extends Component {
    onLogout = () => {
        Accounts.logout();
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                  <button onClick={this.onLogout}>Logout</button>
            </div>
        );
    }
}


export default PrivateHeader;

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
  };