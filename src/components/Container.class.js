import React, {Component} from 'react';
import {Scrollbars} from 'react-custom-scrollbars';
import Loader from 'react-loaders';
import {MainNav, Home, Footer} from '.';
import io from 'socket.io-client';
import {connect} from 'react-redux';

class Container extends Component {

  constructor(props, ...rest) {
    super(props, ...rest);
    this.state = {
      isLoading: false
    };
  }

  componentWillMount() {
    //grab cookie and pull data and stop loader
    const {localStorage} = window;
    console.log(localStorage)
    var user = localStorage.getItem("user")
    var token = localStorage.getItem("token")
    if(token && user) {
      user = JSON.parse(user)
      this.props.dispatch({
        type: 'ACTION_LOGIN',
        payload: {
          user,
          token
        }
      })
    } else {
      this.props.dispatch({
        type: 'ACTION_LOGOUT'
      })
    }
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: '#4e5863',
      opacity: '0.7',
      borderRadius: '0px',
      width: '20px'
    };
    return (<div style={{
        ...style,
        ...thumbStyle
      }} {...props}/>);
  }
  render() {
    const isLoading = this.state.isLoading;

    let propChild = null;
    if (!isLoading) {
      propChild = this.props.children;
    } else {
      propChild = <Loader type="ball-pulse-sync"/>;
    }
    return (
      <Scrollbars renderThumbVertical={this.renderThumb} className="customTrack">
        <div className="mainContainerFlex">
          { this.props.nav === true || this.props.nav === undefined ?
              <MainNav {...this.state} handleMenuFromChild={this.handleMenuToggle}/> :
              null }
          <div className={this.props.nav === false ? "contentContainerNoNav" : "contentContainer"}>
            {propChild}
          </div>
          <Footer/>
        </div>
      </Scrollbars>
    )
  }
}

export default connect((store)=>({store}), (dispatch)=>({dispatch}))(Container)
