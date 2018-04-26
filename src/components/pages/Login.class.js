import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import MainLogo from '../../media/logo.svg';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';
import Loader from 'react-loaders';
import {login, validateEmail} from '../../lib';
import {Redirect} from 'react-router'

const errors = {
  "-1": "A valid email address is required.",
  "-2": "Password must be between 6 and 200 characters.",
  "-3": "You must be logged in to upload videos.",
  "401": "Username and/or password is incorrect.",
  "500": "Server is undergoing maintanence.",
  "400": "Request error; please refresh your browser.",
  "200": null
};

class Login extends Component {

  constructor() {
    super()

    this.login = this.login.bind(this)
  }
  state = {
    disabled: false,
    email: '',
    password: '',
    loginLoading: false
  };

  componentDidMount() {
    if(this.props.match.params.error) {
      if(errors[this.props.match.params.error]) {
        this.setState({
          errorMessage: errors[this.props.match.params.error]
        })
      }
    }
  }

  toggle = () => {
    this.setState((state) => ({
      disabled: !state.disabled
    }));
  }

  onCheckboxChange(e) {
    console.log(e.target.checked)
  }

  login() {



    const email = this.state.email;
    const password = this.state.password;

    if(!validateEmail(email)) {
      this.setState({
        errorMessage: errors[-1]
      })
      return;
    }

    if(password.length < 6 || password.length > 200) {
      this.setState({
        errorMessage: errors[-2]
      })
      return;
    }

    this.setState({
      loginLoading: true
    })



    login(this.state.email, this.state.password).then((response) => {
      this.setState({
        loginLoading: !(response.statusCode != 200 && true),
        errorMessage: errors[response.statusCode]
      }, () => {
        if(response.statusCode == 200) {
          var user = response.results.user;
          const {localStorage} = window;

          var token = response.results.refreshToken;
          var user = JSON.stringify(response.results.user);

          localStorage.setItem("token", token);
          localStorage.setItem("user", user);

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
    .catch(() => {
      this.setState({
        errorMessage: errors[500]
      })
    })

  }

  render() {

    if(this.props.store.loggedIn === true) {
      return (<Redirect to="/" />);
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
        <div className="leftSection loginLeftSection">
          {/* <div className="topSectionLeft">
                    <img src={MainLogo}/>
                </div> */
          }
          <div className="midTSL">
            <NavLink to="/" exact="exact"><img src={MainLogo}/></NavLink>
            <h4>Don't have an account?</h4>
            <div className="signUpBtn">
              <NavLink to="/register" exact="exact">Register</NavLink>
            </div>
          </div>
        </div>
        <div className="rightSection">
          <div className="loginContainer">
            <div className="loginFormContainer">
              <h4>Welcome back!</h4>
              {errorMessage}
              <div className="inputContainer">
                <input placeholder="Email" value={this.state.email} onChange={(e) => {
                    this.setState({email: e.target.value})
                  }}/>
                <input placeholder="Password" type="password" value={this.state.password} onChange={(e) => {
                    this.setState({password: e.target.value})
                  }}/>
              </div>
              <div className="checkboxContainer">
                <p>
                  <label>
                    <Checkbox name="my-checkbox" defaultChecked="defaultChecked" onChange={this.onCheckboxChange} disabled={this.state.disabled}/>
                    <span className="checkboxLabel">Remember me</span>
                  </label>
                </p>
                <a>Forgot password?</a>
              </div>
              <div className="formButtonsContainer">
                <a onClick={this.login}>
                  {this.state.loginLoading ? (
                    <Loader type="ball-pulse-sync" />
                  ) : ("Login")}
                </a>
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

export default connect((store) => ({store}), (dispatch) => ({dispatch}))(Login)
