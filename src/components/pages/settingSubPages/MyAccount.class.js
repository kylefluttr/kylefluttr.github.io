import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class MyAccount extends Component {
  render() {
    return(
    <div className="commonSectionsProfile">
        <div className="settingsSections">
            <h4><i className="ion ion-gear-a"></i> Settings</h4>
            <div className="sectionBrick">
                <div className="profilePicContainerSettings">
                    <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                </div>
                <div className="settingsRightInputsContainer">
                    <div className="individualInput urlInput">
                        <input placeholder="Username"/>
                        <div class="userUrlAppearance">
                            <span>https://fluttr.com/u/jay305</span>
                        </div>
                    </div>
                    <div className="individualInput">
                        <input placeholder="Your email address"/>
                    </div>
                    <div className="individualInput">
                        <input placeholder="Old password"/>
                    </div>
                    <div className="dualInputSettings">
                        <input placeholder="New password"/>
                        <input placeholder="Confirm New password"/>
                    </div>
                    <div class="submitFormContainerSettings">
                        <a>Update</a><a className="badBtn">Delete account</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="settingsSections">
            <h4><i className="ion ion-android-lock"></i> Two-Factor Authentication</h4>
            <div class="sectionBrick">
                <div className="twoFA">
                    <p>Protect your Fluttr account with an extra layer of security. Once configured you'll be required to enter both your password and an authentication code from your mobile phone in order to sign in.</p>
                    <div class="submitFormContainerSettings">
                        <a>Enable Two-Factor Auth</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(MyAccount)
