import React, { Component } from 'react';

export default class ChannelNameSmall extends Component {

  render() {
    return(
    <div className="channelNameSmallContainer">
        <div className="thumbBottom">
            <div className="thumbBottomLeft">
                <div className="channelInfoContainerThumb">
                <div className="thumbBottomLeftLeft">
                    <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                </div>
                <div className="thumbBottomLeftRight">
                    <div className="channelNameSmallName">
                        <h6>Jay305</h6>
                        <div className="isVerified">
                            <span className="isVerifiedTag">
                                <i className="ion ion-checkmark"></i>
                            </span>
                        </div>
                    </div>
                    <span>48k Followers</span>
                </div>
                </div>
                <div className="followChannelContainer">
                    <a className="commonProfileBtn">Follow</a>
                </div>
            </div>
        </div>
    </div>
    )
  }

}
