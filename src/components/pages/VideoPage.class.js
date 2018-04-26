import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import {DefaultPlayer as Player} from 'react-html5video';
import Loader from 'react-loaders'
import {getVideoInfo} from '../../lib'
import onClickOutside from "react-onclickoutside";
import Leaderboard from './reusableComponents/leaderboard.class';

class Video extends Component {

  constructor() {
    super()

    this.state = {
      videoPlayerHeight: false,
      videoLoading: false,
      title: '',
      description: '',
      giveGemFormActive: false
    }
    this.windowResize = this.windowResize.bind(this)
    this.toggleGiveGemForm = this.toggleGiveGemForm.bind(this)
  }

  componentDidMount() {

    getVideoInfo(this.props.match.params.video_id, this.props.store.token)
      .then((videoInfo) => {
        console.log(videoInfo)
        this.setState({
          title: videoInfo.results.title,
          description: videoInfo.results.description
        })
      })
      .catch((error) => {
        console.error(error)
      })

    this.windowResize()

  }

  toggleGiveGemForm() {
    this.setState({
      giveGemFormActive: !this.state.giveGemFormActive
    })
  }

  windowResize() {
    var videoWidth = this.videoPlayer ? this.videoPlayer.el.clientWidth : 0;

    this.setState({
      videoPlayerHeight: videoWidth/16*9
    })
  }

  componentWillMount() {
    window.addEventListener('resize', this.windowResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowResize)
  }

  render() {

    if(this.state.videoLoading) {
      return (<Loader type="ball-pulse-sync" />)
    }

    function NextArrow(props) {
      const {className, style, onClick} = props
      return (<div className={className} style={{
          ...style,
          display: 'block',
          background: 'red'
        }} onClick={onClick}>
        <i className="ion ion-arrow-right-b"></i>
      </div>);
    }

    function PrevArrow(props) {
      const {className, style, onClick} = props
      return (<div className={className} style={{
          ...style,
          display: 'block',
          background: 'green'
        }} onClick={onClick}>
        <i className="ion ion-arrow-left-b"></i>
      </div>);
    }

    let settings = {
      dots: false,
      infinite: true,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>
    };

    return (<div className="videoPageContainer">
      <div className="vidPageSub">
        <div className="vidLeft">
          <div className="videoPlayerContainer">
            <Player ref={videoPlayer => this.videoPlayer = videoPlayer} controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']} poster={''} onCanPlayThrough={() => {
                // Do stuff
              }} style={{
                height: this.state.videoPlayerHeight ? this.state.videoPlayerHeight : 'auto'
              }}>
              <source src={"https://fluttr-api.herokuapp.com/videos/stream/" + this.props.match.params.video_id} type="video/webm"/>
              <track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default="default"/>
            </Player>
          </div>
          <div className="videoInfoContainer">
            <div className="dualContainer">
              <div className="vidInfoContainer">
                <div className="vidInfoContainerLeft">
                  <div className="vidTitleContainer">
                    <h4>{this.state.title}</h4>
                  </div>
                  <div className="publishedInfoContainer">
                    <p><img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                      via @linustechtips</p>
                    <p>Published on May 26, 1927</p>
                  </div>
                </div>
                <div className="viewCountContainer">
                  <div className="flexViewAmts">
                    <p>500,843,229 views</p>
                    <div className="videoOptionsContainer">
                      <div className="videoBtnsContainer">
                        <a onClick={this.toggleGiveGemForm}>Give gems</a>
                      </div>
                      <a>
                        <i className="ion ion-android-share-alt"></i>
                        Share</a>
                      <a>
                        <i className="ion ion-android-favorite"></i>
                        852</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="videoRecommendedContainer">
            <div className="commonPartialTitle singleVideoPartialTitle">
              <h4><i className="ion ion-android-star"/>
                Recommended videos</h4>
            </div>
            <Slider {...settings}>
              <div className="individualthumb">
                <div className="thumbnailContainer">
                  <div className="fluttrThumbSubContainer"><img src="#"/></div>
                  <span className="videoTime">13:59</span>
                </div>
                <div className="thumbBottomContainer">
                  <h5>How to create a good video thumbnail for fluttr</h5>
                  <div className="thumbBottom">
                    <div className="thumbBottomLeft">
                      <div className="channelInfoContainerThumb">
                        <div className="thumbBottomLeftLeft">
                          <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="thumbBottomLeftRight">
                          <h6>LinusTechTips</h6>
                          <span>948K Followers</span>
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
                        <span>1 Year ago</span>
                      </div>
                      <div className="thumbBottomRight">
                        <span>
                          <i className="ion ion-ios-eye"></i>
                          3.9M</span>
                        <span>
                          <i className="ion ion-thumbsup"></i>
                          89K</span>
                        <a className="customDropThumb">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        {/* <div className="videoThumbUp">
                                                <div className="dropdownLinksContainer">
                                                    <a><div className="ddLink"><h5>Add to playlist</h5></div></a>
                                                    <a><div className="ddLink"><h5>Share</h5></div></a>
                                                    <a><div className="ddLink"><h5>Report</h5></div></a>
                                                </div>
                                            </div> */
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="individualthumb">
                <div className="thumbnailContainer">
                  <div className="fluttrThumbSubContainer"><img src="#"/></div>
                  <span className="videoTime">13:59</span>
                </div>
                <div className="thumbBottomContainer">
                  <h5>How to create a good video thumbnail for fluttr</h5>
                  <div className="thumbBottom">
                    <div className="thumbBottomLeft">
                      <div className="channelInfoContainerThumb">
                        <div className="thumbBottomLeftLeft">
                          <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="thumbBottomLeftRight">
                          <h6>LinusTechTips</h6>
                          <span>948K Followers</span>
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
                        <span>1 Year ago</span>
                      </div>
                      <div className="thumbBottomRight">
                        <span>
                          <i className="ion ion-ios-eye"></i>
                          3.9M</span>
                        <span>
                          <i className="ion ion-thumbsup"></i>
                          89K</span>
                        <a className="customDropThumb">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        {/* <div className="videoThumbUp">
                                                <div className="dropdownLinksContainer">
                                                    <a><div className="ddLink"><h5>Add to playlist</h5></div></a>
                                                    <a><div className="ddLink"><h5>Share</h5></div></a>
                                                    <a><div className="ddLink"><h5>Report</h5></div></a>
                                                </div>
                                            </div> */
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="individualthumb">
                <div className="thumbnailContainer">
                  <div className="fluttrThumbSubContainer"><img src="#"/></div>
                  <span className="videoTime">13:59</span>
                </div>
                <div className="thumbBottomContainer">
                  <h5>How to create a good video thumbnail for fluttr</h5>
                  <div className="thumbBottom">
                    <div className="thumbBottomLeft">
                      <div className="channelInfoContainerThumb">
                        <div className="thumbBottomLeftLeft">
                          <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                        </div>
                        <div className="thumbBottomLeftRight">
                          <h6>LinusTechTips</h6>
                          <span>948K Followers</span>
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
                        <span>1 Year ago</span>
                      </div>
                      <div className="thumbBottomRight">
                        <span>
                          <i className="ion ion-ios-eye"></i>
                          3.9M</span>
                        <span>
                          <i className="ion ion-thumbsup"></i>
                          89K</span>
                        <a className="customDropThumb">
                          <span></span>
                          <span></span>
                          <span></span>
                        </a>
                        {/* <div className="videoThumbUp">
                                                <div className="dropdownLinksContainer">
                                                    <a><div className="ddLink"><h5>Add to playlist</h5></div></a>
                                                    <a><div className="ddLink"><h5>Share</h5></div></a>
                                                    <a><div className="ddLink"><h5>Report</h5></div></a>
                                                </div>
                                            </div> */
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="vidRight">
          <div className="vidRightTop">
            <div className="profileSubCount">
              <div className="compactProfile">
                <div className="profilePageImageContainer">
                  <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s288-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                </div>
                <div className="profilePageProfileInfoContainer">
                  <div className="ppICContainer">
                    <div className="ppICLeft">
                      <h4>Linus Techtips</h4>
                    </div>
                    <div className="ppICRight">
                      <div className="isVerified">
                        <span className="isVerifiedTag">
                          <i className="ion ion-checkmark"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socialAndFollowContainer">
                <a className="followProfile">Follow 4.8M</a>
              </div>
            </div>
            <div className="videoDescriptionContainer">
              <span>{this.state.description}</span>
              <div className="expandDiscContainer">
                <a className="expandVideoDescription">Expand</a>
              </div>
            </div>
          </div>
          <div className="vidCommentsContainer">
            <div className="commentsTopContainer">
              <div className="inputContainerComment">
                <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                <input placeholder="Add comment..."/>
                <i className="ion ion-android-send"></i>
              </div>
            </div>
            <div className="actualCommentsContainer">
              <div className="actualComment">
                <div className="commentImage">
                  <img src="https://avatars3.githubusercontent.com/u/19938321?s=460&v=4"/>
                </div>
                <div className="commentRight">
                  <div className="commentTop">
                    <h4>Jay Russo</h4>
                    <span>638 Years ago</span>
                  </div>
                  <div className="actualCommentTextContainer">
                    <span>Cool video! Not only am I the first person to create an account on fluttr but i'm officially the first person to write a comment on a video uploaded to fluttr!</span>
                  </div>
                  <div className="commentBottomContainer">
                    <a>
                      <i className="ion ion-android-favorite"></i>
                      800</a>
                    <a>
                      <i className="ion ion-chatbubble-working"></i>
                      Reply</a>
                  </div>
                </div>
              </div>
              <div className="actualComment">
                <div className="commentImage">
                  <img src="https://avatars3.githubusercontent.com/u/19938321?s=460&v=4"/>
                </div>
                <div className="commentRight">
                  <div className="commentTop">
                    <h4>Jay Russo</h4>
                    <span>638 Years ago</span>
                  </div>
                  <div className="actualCommentTextContainer">
                    <span>Cool video! Not only am I the first person to create an account on fluttr but i'm officially the first person to write a comment on a video uploaded to fluttr!</span>
                  </div>
                  <div className="commentBottomContainer">
                    <a>
                      <i className="ion ion-android-favorite"></i>
                      800</a>
                    <a>
                      <i className="ion ion-chatbubble-working"></i>
                      Reply</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Leaderboard />
        </div>
      </div>
      <div className={this.state.giveGemFormActive ? "commonModalFormContainer activeWindowNoScale" : "commonModalFormContainer hiddenWindowNoScale"}>
        <GiveGemFormOutside {...this.state} active={this.state.giveGemFormActive} exitModal={this.toggleBuyForm} handleClickOutside={() => this.setState({giveGemFormActive:false})}/>
      </div>
    </div>
    )
  }
}

class GiveGemForm extends Component {
  render() {
    return (
        <div className={this.props.active ? "commonModalForm giveGemModal activeWindow" : "commonModalForm giveGemModal hiddenWindow"}>
            <div className="creatorFormTop">
              <div className="creatorTopModal">
                <i onClick={this.props.exitModal} className="ion ion-close"/>
                <h4>Gems</h4>
                <p>Give Fluttr Gems to your favorite creators</p>
              </div>
            </div>
            <div className="giveGemFormBot">
              <div className="giveGemAmtsContainer">
                <h4>How many gems?</h4>
                <div className="gGACRow">
                  <span>1</span>
                  <span>10</span>
                  <span>100</span>
                </div>
                <div className="gGACRow">
                  <span>500</span>
                  <span>1000</span>
                  <span className="active">2000</span>
                </div>
                <div className="gGACRow">
                  <span>3000</span>
                  <span>5000</span>
                  <span>8000</span>
                </div>
                <div className="gGACRow">
                  <span>100000</span>
                  <span>ALL</span>
                  <span>OTHER</span>
                </div>
              </div>
              <div className="addMessageGiveGem">
                <h4>Optional message</h4>
                <input placeholder="Write a king note to @linustechtips (optional)"/>
              </div>
              <div className="totalCostGem creatorCost">
                <h4>Gems to be sent</h4>
                <span className="totalCostGemSendCreator">2000</span>
              </div>
              <div className="giveGemBottomCtr">
                <a>Send</a>
              </div>
              <div className="gemRemainingContainer">
                <div className="gemRemainI">
                  <h4>Gems remaining</h4>
                  <span className="totalCostGemSendCreator">8000</span>
                </div>
                <div className="gemBarContainer">
                  <span> </span>
                </div>
              </div>
            </div>
        </div>
    )
  }
}

var GiveGemFormOutside = onClickOutside(GiveGemForm);
export default connect((store) => ({store}), (dispatch) => ({dispatch}))(Video)
