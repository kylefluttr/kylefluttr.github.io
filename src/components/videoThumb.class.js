import React, { Component } from 'react';

export default class VideoThumb extends Component {

  render() {
    return(
      <div className="individualthumb">
        <div className="thumbnailContainer">
          <div className="fluttrThumbSubContainer"><img src="#"/></div>
          <span className="videoTime">{this.props.videoLength}</span>
        </div>
        <div className="thumbBottomContainer">
          <h5>{this.props.videoTitle}</h5>
          <div className="thumbBottom">
            <div className="thumbBottomLeft">
              <div className="channelInfoContainerThumb">
                <div className="thumbBottomLeftLeft">
                  <img src={this.props.videoImage}/>
                </div>
                <div className="thumbBottomLeftRight">
                  <h6>{this.props.videoCreator}</h6>
                  <span>{this.props.creatorSubCount} Followers</span>
                </div>
              </div>
              <div className="isVerified">
                <span className="isVerifiedTag">
                  <i className="ion ion-checkmark"></i>
                </span>
              </div>
            </div>
            <div className="thumbBottomSubContainer">
              <div className="timeAgoContainer">
                <span>{this.props.videoAge}</span>
              </div>
              <div className="thumbBottomRight">
                <span>
                  <i className="ion ion-ios-eye"></i>
                  {this.props.videoViews}</span>
                <span>
                  <i className="ion ion-thumbsup"></i>
                  {this.props.videoUpvotes}</span>
                <a className="customDropThumb">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
