import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class ProfileVideos extends Component {
  render() {
    return(
    <div className="commonSectionsProfile">
      <div className="profileAboutContainer">
        <div className="pAbtTop">
          <div>
            <h4>Total Views</h4>
            <p>3,946,665,526</p>
            <i className="ion ion-play"></i>
          </div>
          <div>
            <h4>Followers</h4>
            <p>4,800,475</p>
            <i className="ion ion-person-stalker"></i>
          </div>
          <div>
            <h4>Join Date</h4>
            <p>Dec 12, 2007</p>
            <i className="ion ion-android-time"></i>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(ProfileVideos)
