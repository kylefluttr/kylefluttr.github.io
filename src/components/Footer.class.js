import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import MainLogo from '../media/logo.svg';
import Terms from './pages/modals/Terms.class';
import Privacy from './pages/modals/Privacy.class';
import onClickOutside from "react-onclickoutside";

class Footer extends Component {
    constructor() {
        super()
        this.state = {
           privacyFormActive: false,
           termsFormActive: false,
        };
        this.togglePrivacyForm = this.togglePrivacyForm.bind(this)
        this.toggleTermsForm = this.toggleTermsForm.bind(this)
      }
    
      toggleTermsForm() {
        this.setState({
          termsFormActive: !this.state.termsFormActive
        })
      }
    
      togglePrivacyForm() {
        this.setState({
            privacyFormActive: !this.state.privacyFormActive
        })
      }
  render() {
    return(
	<div className="footerContainer">
        <div className="footer">
            <div className="footerTop">
                <ul>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    <NavLink to="/guide" activeClassName="active">Guide</NavLink>
                    {/* <NavLink to="/community" activeClassName="active">Community</NavLink>
                    <NavLink to="/studio" activeClassName="active">Studio</NavLink>
                    <NavLink to="/studio" activeClassName="active">Copyright</NavLink> */}
                </ul>
            </div>
            <div className="footerMid">

            </div>
            <div className="footerBottom">
                <div className="footerBLeft">
                    <span>fluttr.com</span>
                    <p>powered by the fluttr team</p>
                </div>
                <div className="footerBRight">
                    <ul>
                        <a onClick={this.toggleTermsForm}>Terms</a>
                        <a onClick={this.togglePrivacyForm}>Privacy</a>
                    </ul>
                </div>
            </div>
        </div>
        <div className={this.state.privacyFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
            <PrivacyOutside {...this.state} active={this.state.privacyFormActive} exitModal={this.togglePrivacyForm} handleClickOutside={() => this.setState({privacyFormActive:false})}/>
        </div>
        <div className={this.state.termsFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
            <TermsOutside {...this.state} active={this.state.termsFormActive} exitModal={this.toggleTermsForm} handleClickOutside={() => this.setState({termsFormActive:false})}/>
        </div>
	</div>
    )
  }
}

var PrivacyOutside = onClickOutside(Privacy);
var TermsOutside = onClickOutside(Terms);
export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Footer)
