import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class ReusableLeaderboard extends Component {
  render() {
    return(
        <div className="gemLeaderboardContainer">
            <div className="gemLeaderboardTopTitle">
                <h4>Top givers</h4>
                <div className="gemLeaderboardTop">
                        <div>
                            <div className="topGemImg">
                                <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s288-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                <span>2</span>
                            </div>
                            <div>
                                <h4>Luke53</h4>
                                <p>834671 Gems</p>
                            </div>
                        </div>
                        <div>
                            <div className="topGemImg">
                                <img src="https://avatars3.githubusercontent.com/u/19938321?s=460&v=4"/>
                                <span>1</span>
                            </div>
                            <div>
                                <h4>Jess1</h4>
                                <p>5937626 Gems</p>
                            </div>
                        </div>
                        <div>
                            <div className="topGemImg">
                                <img src="https://randomuser.me/api/portraits/men/36.jpg"/>
                                <span>3</span>
                            </div>
                            <div>
                                <h4>TomTwelveChar</h4>
                                <p>233671 Gems</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="leaderBoardListContainer">
                <div className="leaderBoardList">
                    <div className="lbListImg">
                        <img src="https://randomuser.me/api/portraits/men/41.jpg"/>
                        <span>4</span>
                    </div>
                    <div className="lbListNameContainer">
                        <h5>Rex82</h5>
                    </div>
                    <div className="lbListGemContainer">
                        <h5>233671 Gems</h5>
                    </div>
                </div>
                <div className="leaderBoardList">
                    <div className="lbListImg">
                        <img src="https://randomuser.me/api/portraits/men/41.jpg"/>
                        <span>4</span>
                    </div>
                    <div className="lbListNameContainer">
                        <h5>Rex82</h5>
                    </div>
                    <div className="lbListGemContainer">
                        <h5>233671 Gems</h5>
                    </div>
                </div>
                <div className="leaderBoardList">
                    <div className="lbListImg">
                        <img src="https://randomuser.me/api/portraits/men/41.jpg"/>
                        <span>4</span>
                    </div>
                    <div className="lbListNameContainer">
                        <h5>Rex82</h5>
                    </div>
                    <div className="lbListGemContainer">
                        <h5>233671 Gems</h5>
                    </div>
                </div>
                <div className="leaderBoardList">
                    <div className="lbListImg">
                        <img src="https://randomuser.me/api/portraits/men/41.jpg"/>
                        <span>4</span>
                    </div>
                    <div className="lbListNameContainer">
                        <h5>Rex82</h5>
                    </div>
                    <div className="lbListGemContainer">
                        <h5>233671 Gems</h5>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(ReusableLeaderboard)
