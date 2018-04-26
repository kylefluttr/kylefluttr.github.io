import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLogo from '../media/logo.svg';

class LightFooter extends Component {
  render() {
    return(
	<div className="footerContainer">
        <div className="footer">
            <div className="footerBottom lightFooter">
                <div className="footerBLeft">
                    <span>fluttr.com</span>
                    <p>powered by the fluttr team</p>
                </div>
                <div className="footerBRight">
                    <ul>
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/terms" exact activeClassName="active">Terms</NavLink>
                        <NavLink to="/privacy" activeClassName="active">Privacy</NavLink>
                    </ul>
                </div>
            </div>
        </div>
	</div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(LightFooter)
