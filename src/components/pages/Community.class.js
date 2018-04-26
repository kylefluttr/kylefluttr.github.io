import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import ChannelNames from '../channelNameSmall.class';
import Video from '../videoThumb.class';

class Guide extends Component {
  render() {
    return(
    <div className="commonSections">
      <div className="dualSectionCommunity">
        <div className="communityLeft">
          <div className="channelsFollowContainer">
            <div className="titleCommunityPage">
              <h4><i class="ion ion-android-star"></i> Channels to follow</h4>
              <a><i className="ion ion-loop"></i> Refresh</a>
            </div>
            <ChannelNames/><ChannelNames/><ChannelNames/>
          </div>
          <div className="featuredVideosCommunityContainer">
            <div className="titleCommunityPage">
              <h4><i class="ion ion-android-star"></i> Featured videos</h4>
            </div>
            <div className="featuredVidsOnCommunity">
            <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/><Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/><Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
            </div>
          </div>
        </div>
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
                          <div className="commentBottomContainer">
                            <a><i className="ion ion-android-favorite"></i>800</a>
                            <a><i className="ion ion-chatbubble-working"></i>Reply</a>
                          </div>
                          <div className="bottomRepliesContainer">
                            <div className="inputContainerComment">
                              <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                              <input placeholder="Write something..."/>
                              <i className="ion ion-android-send"></i>
                            </div>
                            <div className="actualReplyContainer">
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
                            <div className="actualReplyContainer">
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
                            <div className="actualReplyContainer">
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
                              <img src="https://images.unsplash.com/photo-1500644970114-4ff3c3dfb61f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f25c2c79e4c7cf2c586f1efc3c98a93&auto=format&fit=crop&w=1950&q=80"/>
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
                              <img src="https://images.unsplash.com/photo-1500644970114-4ff3c3dfb61f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f25c2c79e4c7cf2c586f1efc3c98a93&auto=format&fit=crop&w=1950&q=80"/>
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
                              <img src="https://images.unsplash.com/photo-1500644970114-4ff3c3dfb61f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f25c2c79e4c7cf2c586f1efc3c98a93&auto=format&fit=crop&w=1950&q=80"/>
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
                              <span>1 Minute ago</span>
                          </div>
                          <div className="actualCommentTextContainer">
                              <span>Hola!</span>
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

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Guide)
