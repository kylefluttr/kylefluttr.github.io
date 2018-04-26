import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import '../styles/index.css';

import onClickOutside from "react-onclickoutside";

import MainLogo from '../media/logo.svg';

class MainNav extends Component {

  constructor() {
    super()
    this.state = {
      dropdown: false,
      redeemFormActive: false,
      buyFormActive: false
    };
    this.toggleBuyForm = this.toggleBuyForm.bind(this)
    this.toggleRedeemForm = this.toggleRedeemForm.bind(this)
    this.handleDropDownClickOutside = this.handleDropDownClickOutside.bind(this)
    this.handleDropDownClick = this.handleDropDownClick.bind(this)
    
  }

  handleDropDownClick() {
    if(!this.state.dropdown) {
      document.body.addEventListener('click', this.handleDropDownClickOutside, false)
    } else {
      document.body.removeEventListener('click', this.handleDropDownClickOutside, false)
    }

    console.log(this.state.dropdown)

    this.setState({
      dropdown: !this.state.dropdown
    })
  }

  handleDropDownClickOutside(e) {
    if((this.dropdown && this.dropdown.contains(e.target)) || (this.dropdownTrigger && this.dropdownTrigger.contains(e.target))) {
      return
    }

    this.handleDropDownClick();
  }

  toggleRedeemForm() {
    this.setState({
      redeemFormActive: !this.state.redeemFormActive
    })
  }

  toggleBuyForm() {
    this.setState({
      buyFormActive: !this.state.buyFormActive
    })
  }
  render() {

    if(this.props.store.loggedIn) {
      var navProfile = (
        <div ref={dropdownTrigger => this.dropdownTrigger = dropdownTrigger} className="userProfileDropContainer" style={{cursor: 'pointer'}} tabIndex={1} onClick={this.handleDropDownClick}>
          <div className="profilePicNavContainer">
            <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
          </div>
          <i className={"ion " + (this.state.dropdown ? 'ion-arrow-up-b' : 'ion-arrow-down-b')}></i>
        </div>
      );
    } else if (this.props.store.loggedIn === false) {
      var navProfile = (
        <div className="nameContainerNav">
          <NavLink to="/login" exact>
            <span>Login</span>
          </NavLink>
        </div>
      );
    } else {
      var navProfile = null;
    }

    return (
      <div className="superNav">
        <div className="navPadder">
          <div className="mainNavigation">
            <div className="navLeft">
              <NavLink to="/" exact><img src={MainLogo}/></NavLink>
              <div className="searchInput">
                <i className="ion ion-search"></i>
                <input placeholder="Search videos..."/>
              </div>
            </div>
            <div className="navCenter">
              <ul>
                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                <NavLink to="/guide" activeClassName="active">Guide</NavLink>
                <NavLink to="/community" activeClassName="active">Community</NavLink>
  						  {/* <NavLink to="/studio" activeClassName="active">Studio</NavLink> */}

              </ul>
            </div>
            <div className="navRight">
              {/* <div className="notLoggedInContainer">
  						<NavLink to="/login">Login</NavLink>
  					</div> */
              }
              <div className="userInNavContainer">
                {/* <div className="userNotificationContainer">
                  <i className="ion ion-ios-bell"></i>
                </div> */}
                {navProfile}

                {/* Account dropdown below */}
                <div className="commonDropdown" ref={dropdown => this.dropdown = dropdown} style={{display: this.state.dropdown ? null : 'none'}}>
                  <div className="dropdownLinksContainer">
                    {/* <NavLink to="/buy" activeClassName="active"> */}
                      <div className="balanceContainer">
                        <div className="balanceTop dropBalance">
                          <h3>456,449</h3>
                          <span>GEMS</span>
                        </div>
                        <div className="balanceBottom">
                          <a onClick={this.toggleBuyForm}>Buy</a>
                          <a onClick={this.toggleRedeemForm}>Redeem</a>
                        </div>
                      </div>
                    {/* </NavLink> */}
                    <NavLink to="/profile" activeClassName="active">
                      <div className="ddLink">
                        <h5>Profile</h5>
                        <p>Check your profile</p>
                      </div>
                    </NavLink>
                    <NavLink to="/myvideos">
                      <div className="ddLink">
                        <h5>My videos</h5>
                        <p>Check video uploads</p>
                      </div>
                    </NavLink>
                    <NavLink to="/settings">
                      <div className="ddLink">
                        <h5>Settings</h5>
                        <p>Account & Billing</p>
                      </div>
                    </NavLink>
                    <a>
                      <div className="ddLink">
                        <h5>Darkmode</h5>
                        <p>Enable or disable</p>
                      </div>
                    </a>
                    <NavLink to="/signout">
                      <div className="ddLink">
                        <h5>Logout</h5>
                        <p>Sign out of session</p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="uploadInNav">
                <NavLink to="/upload" activeClassName="active">
                  <i className="ion ion-upload"></i>
                </NavLink>
              </div>
            </div>
            <div className={this.state.redeemFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
              <RedeemFormOutside {...this.state} active={this.state.redeemFormActive} exitModal={this.toggleRedeemForm} handleClickOutside={() => this.setState({redeemFormActive:false})}/>
            </div>
            <div className={this.state.buyFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
              <BuyGemFormOutside gemOptions={['500', '1000', '2000', '3000']} usdAmts={['5.00', '10.00', '20.00', '30.00']} {...this.state} active={this.state.buyFormActive} exitModal={this.toggleBuyForm} handleClickOutside={() => this.setState({buyFormActive:false})}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class RedeemForm extends Component {
  render() {
    return (
        <div className={this.props.active ? "commonModalForm activeWindow" : "commonModalForm hiddenWindow"}>
            <div className="redeemFormTop">
              <div className="balanceTop balanceTopRedeem">
                <i onClick={this.props.exitModal} className="ion ion-close"/>
                <div className="redeemGem"><h3>456,449</h3><span>GEMS</span></div>
                <h5>≈ <span>$2,932.84 USD</span></h5>
              </div>
            </div>
            <div className="redeemFormBot">
              <div className="paymentMethodBlocks">
                <span className="active"> 
                  <div>PayPal</div>
                </span>
                <span> 
                  <div>Skrill</div>
                </span>
                <span> 
                  <div>Bank</div>
                </span>
              </div>
              <div className="withdrawInputContainer">
                <h4>Your PayPal email</h4>
                <div className="emailInputWithdraw">
                  <input placeholder="Your email address"/>
                </div>
              </div>
              <div className="withdrawInputContainer">
                <h4>Enter withdrawal amount</h4>
                <div className="inputIconFloats">
                  <span>$</span>
                  <input placeholder="0.00"/>
                  <span>USD</span>
                </div>
              </div>
              <div className="submitFormContainerGem">
                <a>Withdraw</a>
              </div>
            </div>
        </div>
    )
  }
}


class BuyGemForm extends Component {
  constructor() {
    super()
    this.state = {
      gemAmount: 500,
      gemDropIsActive: false,
      totalCostUsd: 5.02,
    };
    this.changeGemAmt = this.changeGemAmt.bind(this)
    this.toggleGemDrop = this.toggleGemDrop.bind(this)
  }

  // changeGemAmt(event) {
  //   var str = event.currentTarget.textContent;
  //   str = str.replace(/[^0-9\.]+/g, "");
  //   this.setState({
  //     gemAmount: str,
  //     gemDropIsActive: false
  //   })
  // }

  changeGemAmt(e) {
		this.setState({
			gemDropIsActive: false,
			gemAmount: e.target.innerText
		});
	}

  toggleGemDrop() {
    this.setState({
      gemDropIsActive: !this.state.gemDropIsActive
    })
  }

  render() {
		let gemDropdown = undefined;
		if (this.state.gemDropIsActive) {
			gemDropdown = (
				<div className={this.state.gemDropIsActive ? "gemDrop activeWindowNoScale" : "gemDrop hiddenWindowNoScale"}>
				{
					this.props.gemOptions.map(item => {
						return <span onClick={(e) => { this.changeGemAmt(e); }} className="item">{item}</span>;
          })
				}
				</div>
			);
		}
    return (
        <div className={this.props.active ? "commonModalForm activeWindow" : "commonModalForm hiddenWindow"}>
            <div className="redeemFormTop">
              <div className="balanceTop balanceTopRedeem">
                <i onClick={this.props.exitModal} className="ion ion-close"/>
                <div className="redeemGem"><h3>0</h3><span>GEMS</span></div>
                <h5>≈ <span>$0.00 USD</span></h5>
              </div>
            </div>
            <div className="redeemFormBot">
              <div className="withdrawInputContainer">
                <h4>How many GEMS do you want?</h4>
                <div className="buyGemsDrop">
                  <div className="gemDropTrigger" onClick={this.toggleGemDrop}> 
                    <span>{this.state.gemAmount} GEMS</span>
                    <i className="ion ion-arrow-down-b"></i>
                  </div>
                    {gemDropdown}
                </div>
              </div>
              <div className="totalCostGem">
                <h4>Total Due</h4>
                <span className="totalCostGemUsd">${this.state.totalCostUsd}</span>
              </div>
              <div className="submitFormContainerGem">
                <a>Buy now</a>
              </div>
            </div>
        </div>
    )
  }
}


var BuyGemFormOutside = onClickOutside(BuyGemForm);
var RedeemFormOutside = onClickOutside(RedeemForm);
export default connect((store) => ({store}), (dispatch) => ({dispatch}))(MainNav)
