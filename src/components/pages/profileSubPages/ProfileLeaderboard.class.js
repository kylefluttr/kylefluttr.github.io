import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Leaderboard from '../reusableComponents/leaderboard.class';

class ProfileVideos extends Component {
  render() {
    return(
    <div className="commonSectionsProfile leaderboardProfileSub">
      <Leaderboard/>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(ProfileVideos)
