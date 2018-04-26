import React from 'react';
import {Redirect} from 'react-router';
import Loader from 'react-loaders';
import {connect} from 'react-redux';
import {
    Container,
    Register
  } from '../components';

class Signout extends React.Component {
  constructor() {
    super()
    this.state = {};
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'ACTION_LOGOUT'
    })
    const {localStorage} = window;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setTimeout(() => {
      this.setState({
        reload: true
      })
    }, 500)
  }

  render() {

    if(this.state.reload) {
      return (
        <Redirect to="/" />
      )
    }

    return(
      <Loader type="ball-pulse-sync"/>
    )
  }
}

export default connect((store) => ({store}), (dispatch) => ({dispatch}))(Signout)
