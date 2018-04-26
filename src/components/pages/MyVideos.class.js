import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';
import Loader from 'react-loaders';

class Settings extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }


  }

  render() {
    return(
    <div className="commonSections">
        ss
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Settings)
