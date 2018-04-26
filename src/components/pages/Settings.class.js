import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';
import Loader from 'react-loaders';
import {NavLink} from 'react-router-dom';

class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }


  }

  render() {
    return(
    <div className="settingsPageContainer">
        <div className="sideBarLeft">
            <ul>
                <NavLink to="/settings">My Account</NavLink>
                <NavLink to="/settings/billing">Billing & History</NavLink>
                <NavLink to="/" className="logoutSettingsPage">Logout</NavLink>
            </ul>
        </div>
        <div className="commonSections">
            {this.props.children}
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Settings)
