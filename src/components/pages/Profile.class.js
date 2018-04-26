import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import {Redirect} from 'react-router';
import onClickOutside from "react-onclickoutside";

class Profile extends Component {
constructor() {
    super()
    this.state = {
        creatorFormActive: false
    }
    this.toggleCreatorDrop = this.toggleCreatorDrop.bind(this)
}

toggleCreatorDrop() {
    this.setState({
        creatorFormActive: !this.state.creatorFormActive
    })
  }

  render() {
    console.log(this.props.store)
    if(this.props.store.loggedIn != true) {
      return (
        <Redirect to="/" />
      )
    }

    return(
    <div className="profileSection">
        <div className="profileBanner">
            <div className="profileContentContainer">
                <div className="profileRight">
                    <div className="profileSubCount">
                        <div className="compactProfile">
                            <div className="profilePageImageContainer">
                                <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                            </div>
                            <div className="profilePageProfileInfoContainer">
                                <div className="ppICContainer">
                                    <div className="ppICLeft">
                                        <h4>{this.props.store.user.firstName} {this.props.store.user.lastName}</h4>
                                        <p>@{this.props.store.user.username}</p>
                                    </div>
                                    <div className="ppICRight">
                                        <div className="isVerified">
                                            <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="formatableBio">
                                    {this.props.store.user.description || "This user likes to keep an air of mystery around them."}
                                </div>
                            </div>
                        </div>
                        <div className="socialAndFollowContainer">
                            <div className="dualContainer">
                                <a className="commonProfileBtn vipBtn" onClick={this.toggleCreatorDrop}>Creator VIP</a>
                                <a className="commonProfileBtn">Follow 4.8M</a>
                            </div>
                            <div className="socialsContainerProfile">
                                <a><i className="ion ion-social-facebook"></i></a>
                                <a><i className="ion ion-social-instagram"></i></a>
                                <a><i className="ion ion-social-twitch"></i></a>
                                <a><i className="ion ion-social-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profileNavContainer">
                        <NavLink to="/profile" exact activeClassName="active">Feed</NavLink>
                        <NavLink to="/profile/videos" activeClassName="active">Videos</NavLink>
                        <NavLink to="/profile/leaderboard" activeClassName="active">Leaderboard</NavLink>
                        <NavLink to="/profile/channels" activeClassName="active">Channels</NavLink>
                        <NavLink to="/profile/followers" activeClassName="active">Followers</NavLink>
                        <NavLink to="/profile/about" activeClassName="active">About</NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div className="profilePageContainer">
            <div className="profileChildContainer">
                {this.props.children}
            </div>
        </div>
        <div className={this.state.creatorFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
            <CreatorVipModalOutside {...this.state} active={this.state.creatorFormActive} exitModal={this.toggleRedeemForm} handleClickOutside={() => this.setState({creatorFormActive:false})}/>
        </div>
    </div>
    )
  }
}

class CreatorVipModal extends Component {
    render() {
      return (
          <div className={this.props.active ? "commonModalForm activeWindow" : "commonModalForm hiddenWindow"}>
              <div className="creatorFormTop">
                <div className="creatorTopModal">
                  <i onClick={this.props.exitModal} className="ion ion-close"/>
                  <h4>Creator VIP</h4>
                  <p>Support up to 5 Fluttr creators every month! By subscribing you'll receive subscriber only content and updates from your favourite creators</p>
                </div>
              </div>
              <div className="creatorFormBody">
                {/* <div className="userSubAmount"> 
                    <h4>Creators remaining <span>3/5</span></h4>
                    <div className="userSubUsers">
                        <div className="active">
                            <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="active">
                            <img src="https://randomuser.me/api/portraits/men/6.jpg"/>
                        </div>
                        <div>
                            <i className="ion ion-person"></i>
                        </div>
                        <div>
                            <i className="ion ion-person"></i>
                        </div>
                        <div>
                            <i className="ion ion-person"></i>
                        </div>
                    </div>
                </div> */}
                <div className="firstMonthFree">
                    <a>First month <span>free</span></a>
                </div>
                <div className="creatorSubscriptionPlans">
                    <div className="active"> 
                        <h5>$4.99</h5>
                        <p>Monthly</p>
                    </div>
                    <div> 
                        <h5>$14.97</h5>
                        <p>3 Months</p>
                    </div>
                    <div> 
                        <h5>$29.94</h5>
                        <p>6 Months</p>
                    </div>
                </div>
              </div>
              <div className="totalCostGem creatorCost">
                <h4>Total Due</h4>
                <span className="totalCostGemUsd">FREE</span>
              </div>
              <div className="creatorFormBot">
                  <a>Subscribe</a>
              </div>
          </div>
      )
    }
  }

var CreatorVipModalOutside = onClickOutside(CreatorVipModal);
export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Profile)
