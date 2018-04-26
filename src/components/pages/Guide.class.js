import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';


class Guide extends Component {
  render() {
	function NextArrow(props) {
		const {className, style, onClick} = props
		return (
		  <div
			className={className}
			style={{...style, display: 'block', background: 'red'}}
			onClick={onClick}
		  ><i className="ion ion-arrow-right-b"></i></div>
		);
	  }
	  
	function PrevArrow(props) {
		const {className, style, onClick} = props
		return (
		  <div
			className={className}
			style={{...style, display: 'block', background: 'green'}}
			onClick={onClick}
		  ><i className="ion ion-arrow-left-b"></i></div>
		);
	  }

    let settings = {
		dots: false,
		infinite: true,
		speed: 250,
		slidesToShow: 6,
		slidesToScroll: 6,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
            {
				breakpoint: 3856,
				settings: {
				  slidesToShow: 5,
				  slidesToScroll: 5,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 3313,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 2742,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 2155,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 1750,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 1450,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 2,
				  infinite: true,
				  dots: true
				}
			  }, {
				breakpoint: 1125,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				  infinite: true,
				  dots: true
				}
			  }]
	  };
    return(
    <div className="commonSections">
        <div className="guideContainer">
            <div className="guideRow">
                <div className="guideRowLeft">
                    <div className="categoryThumbContainer trendingThumb">
                        <span><i className="ion ion-arrow-graph-up-right"></i> Trending now</span>
                    </div>
                </div>
                <div className="guideRowRight">
                    <Slider {...settings}>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
            <div className="guideRow">
                <div className="guideRowLeft">
                    <div className="categoryThumbContainer fltOrigThumb">
                        <span><i className="ion ion-heart"></i> Fluttr originals</span>
                    </div>
                </div>
                <div className="guideRowRight">
                    <Slider {...settings}>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
            <div className="guideRow">
                <div className="guideRowLeft">
                    <div className="categoryThumbContainer vlogThumb">
                        <span><i className="ion ion-ios-videocam"></i> Vlogs</span>
                    </div>
                </div>
                <div className="guideRowRight">
                    <Slider {...settings}>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
            <div className="guideRow">
                <div className="guideRowLeft">
                    <div className="categoryThumbContainer beautyThumb">
                        <span><i className="ion ion-person"></i> Beauty</span>
                    </div>
                </div>
                <div className="guideRowRight">
                    <Slider {...settings}>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="individualthumb guideThumb">
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
                                            <img src="https://yt3.ggpht.com/-QGhAvSy7npM/AAAAAAAAAAI/AAAAAAAAAAA/Uom6Bs6gR9Y/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"/>
                                        </div>
                                        <div className="thumbBottomLeftRight">
                                            <h6>LinusTechTips</h6>
                                            <span>948K Followers</span>
                                        </div>
                                    </div>
                                    <div className="isVerified">
                                        <span className="isVerifiedTag"><i className="ion ion-checkmark"></i></span>
                                    </div>
                                </div>
                                <div className="thumbBottomSubContainer">
                                    <div className="timeAgoContainer">
                                        <span>1 Year ago</span>
                                    </div>
                                    <div className="thumbBottomRight">
                                        <span><i className="ion ion-ios-eye"></i> 3.9M</span>
                                        <span><i className="ion ion-thumbsup"></i> 89K</span>
                                        <a className="customDropThumb"><span></span><span></span><span></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slider>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Guide)
