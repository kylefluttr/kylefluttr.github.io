import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class ProfileFeed extends Component {
  render() {
    return(
    <div className="profilePageSections">
        <div className="profilePageSubContainer">
            <div className="feedTopContainer">
                <div className="inputContainerComment">
                    <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                    <input placeholder="Write something..."/>
                    <i className="ion ion-android-send"></i>
                </div>
                <div className="profileFeedPostContainer">
                    <div className="actualComment">
                        <div className="commentImage">
                            <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="commentRight">
                            <div className="commentTop">
                                <h4>Linus Techtips</h4>
                                <span>1 Minute ago</span>
                            </div>
                            <div className="actualCommentTextContainer">
                                <span>Hola!</span>
                            </div>
                        </div>
                    </div>
                    <div className="actualComment">
                        <div className="commentImage">
                            <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="commentRight">
                            <div className="commentTop">
                                <h4>Linus Techtips</h4>
                                <span>34 Minutes ago</span>
                            </div>
                            <div className="actualCommentTextContainer">
                                <span>Just took this... How cool is that</span>
                                <img src="https://images.unsplash.com/photo-1466023579643-2684822d3c2d?auto=format&fit=crop&w=1350&q=80"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(ProfileFeed)
