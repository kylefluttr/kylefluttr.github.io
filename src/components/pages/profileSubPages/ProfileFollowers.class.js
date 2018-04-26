import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import ChannelNames from '../../channelNameSmall.class';

class ProfileFollowers extends Component {
  render() {
    return(
    <div className="commonSectionsProfile">
      <div className="channelNamesCont">
        <ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/><ChannelNames/>
      </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(ProfileFollowers)
