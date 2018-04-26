import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router';
import Loader from 'react-loaders';

class UploadForm extends Component {

    constructor() {
      super()
      this.state = {
        errorMessage: null,
        title: '',
        description: '',
        uploadLoading: false
      }

      this.uploadVideo = this.uploadVideo.bind(this)
    }

    uploadVideo() {
      if(this.state.uploadLoading) {
        return
      }

      var {
        title, description
      } = this.state;

      if(title.length < 4) {
        this.setState({
          errorMessage: 'Video title must be at least 4 characters.'
        })
        return
      }

      if(description.length == 0) {
        description = "No video description"
      }

      var video = this.props.video;

      this.setState({
        uploadLoading: true
      })

      var self = this;

      var data = new FormData();
      data.append("video", video);
      data.append("title", title);
      data.append("description", description);

      var xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
          try {
            var jsonResponse = JSON.parse(this.responseText);
            if(jsonResponse.statusCode == 201) {
              self.props.done(jsonResponse.results)
            } else {
              throw new Error('Bad status code.')
            }
          } catch(e) {
            console.log(e)
            self.setState({
              uploadLoading: false,
              errorMessage: 'There was an error uploading your video.'
            })
          }
        }
      });

      xhr.open("POST", "https://fluttr-api.herokuapp.com/videos");
      xhr.setRequestHeader("Authorization", "Bearer " + this.props.userAuthToken);
      xhr.send(data);

    }

    render() {

      if(this.state.errorMessage) {
        var errorMessage = (
          <div className="loginError" style={{
            height: 40,
            backgroundColor:'rgb(241, 82, 82)',
            marginTop: 10,
            borderRadius: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
            fontWeight: 400
          }}>
            {this.state.errorMessage}
          </div>
        );
      } else {
        var errorMessage = null;
      }

     return(
        <div className={this.props.active ? "uploadFormContainer activeWindow" : "uploadFormContainer hiddenWindow"}>
            <div className="uploadFormActual">
                <div className="statusContainerVidUpload">
                    <h4>bee_logo_wip.png has been selected.</h4>
                </div>
                {errorMessage}
                <div className="inputsContainerCol">
                    <input placeholder="Title" value={this.state.title} onChange={(e) => {this.setState({title: e.target.value})}} />
                    <textarea placeholder="Description" style={{resize: 'none'}} value={this.state.description} onChange={(e) => {this.setState({description: e.target.value})}}></textarea>
                </div>
                <div className="tagsContainer">
                    <input placeholder="Tags (e.g., flying pig, mashup, alberto)"/>
                    <div className="actualTagListContainer">
                        <a>#dogs</a><a>#cats</a><a>#cars</a><a>#logan</a><a>#keemstar</a>
                    </div>
                </div>
                <div class="saveUploadFormContainer">
                    <a onClick={this.uploadVideo} className={this.state.uploadLoading ? 'loadingUpload':null}>
                      {this.state.uploadLoading ? <Loader type="ball-pulse-sync" /> : 'Proceed'}
                    </a>
                </div>
            </div>
        </div>
        )
    }
}

class Upload extends Component {
  constructor(props) {
    super(props)

    this.state = {
        uploadFormActive : false,
        completedVideoUpload: false,
        videoUploaded: null
    }

    this.fileSelect = this.fileSelect.bind(this)
  }

  fileSelect(e) {
    console.log(e.target.files)
    this.setState({uploading: e.target.files[0], uploadFormActive: true})
  }

  render() {

    if(!this.props.store.loggedIn) {
      return(
        <Redirect to="/login/-3" />
      )
    }

    if(this.state.completedVideoUpload) {
      return (
        <Redirect to={"/watch/" + this.state.videoUploaded.id} />
      )
    }

    if(this.state.uploading) {
      var name = this.state.uploading;
      var upload = null;
    } else {
      var upload = (
        <div className="uploadBot">
        <div className="uploadTop">
            <i className="ion ion-upload"></i>
        </div>
            <span>Dragging is temporarily disabled. Please <label for="file-input" style={{color: '#1bbc9d', cursor: 'pointer'}}>browse</label> for a video.</span>
        </div>
      )
    }

    console.log(this.props.store)

    return(
    <div className="commonSections">
        <div className="uploadFlex">
            <div className="actualUploadContainer">

                {upload}

                <input type="file" id="file-input" style={{display: 'none'}} onChange={this.fileSelect} />
                <div className="uploadRuleContainer">
                    <p>Adult content is not allowed. Please respect our community rules. </p>
                </div>

                <UploadForm
                  active={this.state.uploadFormActive}
                  video={this.state.uploading}
                  userAuthToken={this.props.store.token}
                  done={(video) => {
                    this.setState({
                      completedVideoUpload: true,
                      videoUploaded: video
                    })
                  }}
                />

            </div>
            <div className="otherUploadRight">
                <div className="individualOUR supportIn">
                    <div className="imageUploadRight">
                        <i className="ion ion-help-buoy"></i>
                    </div>
                    <div className="rightDescUpload">
                        <h4>Need help?</h4>
                        <a>Get support</a>
                    </div>
                </div>
                <div className="individualOUR creatorIn">
                    <div className="imageUploadRight">
                        <i className="ion ion-ios-crop-strong"></i>
                    </div>
                    <div className="rightDescUpload">
                        <h4>Creator studio</h4>
                        <a>Edit</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default connect((store)=>({store}),(dispatch)=>({dispatch}))(Upload)
