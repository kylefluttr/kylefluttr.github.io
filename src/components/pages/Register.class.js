import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import MainLogo from '../../media/logo.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import {Redirect} from 'react-router';
import {register, validateEmail} from '../../lib'
import Loader from 'react-loaders';

function onChange(e) {
  console.log('Checkbox checked:', (e.target.checked));
}

const errors = {
  "-1": "Email is invalid.",
  "-2": "Username must be between 6 and 16 characters.",
  "-3": "Password must be between 6 and 200 characters.",
  "-4": "Passwords don't match.",
  "-5": "First and last name fields are required.",
  "500": "Server is undergoing maintanence.",
  "400": "Request error; please refresh your browser.",
  "201": null
};

class Register extends Component {

  constructor() {
    super()

    this.register = this.register.bind(this)
  }

  state = {
    disabled: false,
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    registerLoading: false
  };

  toggle = () => {
    this.setState((state) => ({
      disabled: !state.disabled
    }));
  }

  componentDidMount() {
    if(this.props.match.params.error) {
      if(errors[this.props.match.params.error]) {
        this.setState({
          errorMessage: errors[this.props.match.params.error]
        })
      }
    }
  }

  register() {

    const {
      email,
      username,
      firstName,
      lastName,
      password,
      confirmPassword
    } = this.state;

    console.log(this.state)

    if(!validateEmail(email)) {
      this.setState({errorMessage: errors[-1]});
      return
    }

    if(username.length < 6 || username.length > 16) {
      this.setState({errorMessage: errors[-2]})
      return
    }

    if(password.length < 6 || password.length > 200) {
      this.setState({errorMessage: errors[-3]})
      return
    }

    if(password != confirmPassword) {
      this.setState({errorMessage: errors[-4]})
      return
    }

    if(!firstName || !lastName) {
      this.setState({errorMessage: errors[-5]})
      return
    }

    this.setState({
      registerLoading: true
    })

    register({
      firstName,
      lastName,
      email,
      username,
      password,
      confirmPassword
    })
      .then((response) => {
        console.log(response)
        this.setState({
          registerLoading: response.statusCode == 201,
          errorMessage: errors[response.statusCode]
        }, () => {
          if(response.statusCode == 201) {
            var user = response.results.user;
            const {localStorage} = window;

            var token = response.results.refreshToken;
            var user = JSON.stringify(response.results.user);

            localStorage.setItem("token", token);
            localStorage.setItem("user", user);

            console.log(response)

            this.props.dispatch({
              type: 'ACTION_LOGIN',
              payload: {
                user,
                token: response.results.token,
                refreshToken: response.results.refreshToken
              }
            })
          }
        })
      })

  }

  render() {

    if (this.props.store.loggedIn === true) {
      return (<Redirect to="/"/>);
    }

    var errorMessage = this.state.errorMessage ? (
      <div className="loginError" style={{
        height: 45,
        backgroundColor:'rgb(241, 82, 82)',
        marginBottom: 10,
        borderRadius: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 100
      }}>
        {this.state.errorMessage}
      </div>
    ) : null;

    return (<div className="noNavContainer">
      <div className="dualSection">
        <div className="leftSection registerLeftSection">
          {/* <div className="topSectionLeft">
                    <img src={MainLogo}/>
                </div> */
          }
          <div className="midTSL">
            <NavLink to="/" exact="exact"><img src={MainLogo}/></NavLink>
            <h4>Already have an account?</h4>
            <div className="signUpBtn">
              <NavLink to="/login" exact="exact">Login</NavLink>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="loginContainer">
            <div className="loginFormContainer">
              <h4>Hi there</h4>
              {errorMessage}
              <div className="dualInputContainer">
                <input placeholder="First name" value={this.state.firstName} onChange={(e) => {
                    this.setState({firstName: e.target.value})
                  }}/>
                <input placeholder="Last name" value={this.state.lastName} onChange={(e) => {
                    this.setState({lastName: e.target.value})
                  }}/>
              </div>
              <div className="inputContainer">
                <input className="usernameFirstChild" placeholder="Username" value={this.state.username} onChange={(e) => {
                    this.setState({username: e.target.value})
                  }}/>
                <div className="userUrlAppearance">
                  {/* <h5>Your URL :</h5> */}
                  <span>https://fluttr.com/u/{this.state.username}</span>
                  {/* <input value="https://fluttr.com/u/jay305" disabled/> */}
                </div>
                <input className="oddMargins" placeholder="Email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
              </div>
              <div className="dualInputContainer">
                <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => {
                    this.setState({password: e.target.value})
                  }}/>
                <input type="password" placeholder="Confirm password" value={this.state.confirmPassword} onChange={(e) => {
                    this.setState({confirmPassword: e.target.value})
                  }}/>
              </div>
              <div className="formButtonsContainer">
                <a onClick={this.register}>{this.state.registerLoading ? (
                  <Loader type="ball-pulse-sync" />
                ) : ("Register")}</a>
                <div className="socialSignInContainer">
                  <a class="withFacebook">
                    <i className="ion ion-social-facebook"></i>
                    With Facebook</a>
                  <a class="withGoogle">
                    <i className="ion ion-social-google"></i>
                    With Google</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect((store) => ({store}), (dispatch) => ({dispatch}))(Register)
