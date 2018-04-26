import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slider from 'react-slick';
import MainLogo from '../media/logo.svg';
import Video from './videoThumb.class';
import Loader from 'react-loaders';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  componentWillMount() {

  }

  render() {
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
      slidesToShow: 6,
      slidesToScroll: 6,
      nextArrow: <NextArrow/>,
      prevArrow: <PrevArrow/>,
      responsive: [
        {
          breakpoint: 1650,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 1650,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        }, {
          breakpoint: 1100,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }, {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    if(this.state.loading) {
      return (
        <Loader type="ball-pulse-sync"/>
      )
    } else
    return (
      <div className="commonSections">
        <div className="commonPartial">
          <div className="commonPartialTitle">
            <h4><i className="ion ion-arrow-graph-up-right"/>
              Trending Now</h4>
          </div>
          <div className="actualPartial">
            <div className="commonVideoThumbContainer">
              <Slider {...settings}>

                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>
                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>

              </Slider>
            </div>
          </div>
        </div>
        <div className="commonPartial">
          <div className="commonPartialTitle">
            <h4><i className="ion ion-person-stalker"/>
              Your subscriptions</h4>
          </div>
          <div className="actualPartial">
            <div className="commonVideoThumbContainer">
              <Slider {...settings}>
                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>
                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="commonPartial">
          <div className="commonPartialTitle subscriptionSingle">
            <h4><i className="ion ion-person"/>
              More from LinusTechTips</h4>
          </div>
          <div className="actualPartial">
            <div className="commonVideoThumbContainer">
              <Slider {...settings}>
                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>
                <div>
                  <Video videoAge="3 Weeks" videoTitle="How to get rich quick!" videoViews="14K" videoLength="14:00" videoUpvotes="69" videoCreator="MoneyHungry" videoImage="http://via.placeholder.com/100x100"/>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((store) => ({store}), (dispatch) => ({dispatch}))(Home)
