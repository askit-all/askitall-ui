// import React, { Component } from "react";
// import AgoraRTC from "agora-rtc-sdk";
// import Fab from "@material-ui/core/Fab";
// import Button from "@material-ui/core/Button";
// import CallEndIcon from "@material-ui/icons/CallEnd";
// import MinimizeIcon from "@material-ui/icons/PhotoSizeSelectSmall";
// import axios from "axios";
// import CONFIG_CONSTANTS from "./../../../constants/apiList";
// import "./AgoraVCFrame.scss";
// import MaximizeIcon from "@material-ui/icons/Fullscreen";
// import MicOnIcon from "@material-ui/icons/MicNoneOutlined";
// import MicOffIcon from "@material-ui/icons/MicOffOutlined";
// import VideoOnIcon from "@material-ui/icons/VideocamOutlined";
// import VideoOffIcon from "@material-ui/icons/VideocamOffOutlined";
// import CloseIcon from "@material-ui/icons/CloseOutlined";
// import VideoCam from "@material-ui/icons/Videocam";
// import CallIcon from "@material-ui/icons/Call";
// import moment from "moment";

// class AgoraVCFrame extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showCallWindow: false,
//       token: "",
//       uid: "",
//       appId: "",
//       channel: "",
//       sid: "",
//       resourceId: "",
//       recordingUid: "",
//       recordingToken: "",
//       queryIntervalId: null,
//       minimized: !!this.props.instantAppointment,
//       micOn: true,
//       videoOn: true,
//       showRejected: false
//     };
//     this.cameraVideoProfile = "480p_4"; // 640 × 480 @ 30fps  & 750kbs
//     let localStreams = {};
//     let client = {};
//     let recordingClient = {};
//     let callStartTime = 0;
//     let totalCallDuration = 0;
//     let startTime = "";
//     let endTime = "";
//     let rejectedIntervalId = null;
//     let onPatientJoin = () => {
//       rejectedIntervalId && clearInterval(rejectedIntervalId);
//       this.setState({ showRejected: false });
//     };
//     this.checkVCRejected = async () => {
//       const requestData = {
//         appointmentId: this.props.userId
//       };
//       // axios
//       //   .post(CONFIG_CONSTANTS.url.CHECK_VC_REJECTED, requestData)
//       //   .then(res => {
//       //     if (res.data.success && res.data.rejected) {
//       //       this.setState({ showRejected: true });
//       //       console.log("VC REJECTED ");
//       //       rejectedIntervalId && clearInterval(rejectedIntervalId);
//       //     }
//       //   })
//       //   .catch(err => {
//       //     console.log("ERROR IN /checkVCRejected", err);
//       //   });
//     };
//     // this.startRecording = async () => {
//     //   const option = {
//     //     appId: this.state.appId,
//     //     token: this.state.recordingToken,
//     //     channel: this.state.channel,
//     //     uid: this.state.recordingUid
//     //   };
//     //   recordingClient = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
//     //   try {
//     //     await new Promise((resolve, reject) => {
//     //       recordingClient.init(
//     //         option.appId,
//     //         () => {
//     //           recordingClient.join(
//     //             option.token,
//     //             option.channel,
//     //             option.uid,
//     //             function (uid) {
//     //               console.log("RECORDING USER JOINED");
//     //               resolve("RECORDING USER JOINED");
//     //             },
//     //             function (err) {
//     //               console.log("[ERROR] : join channel failed", err);
//     //               reject("ERROR IN JOIN CHANNEL");
//     //             }
//     //           );
//     //         },
//     //         function (err) {
//     //           console.log("[ERROR] : AgoraRTC client init failed", err);
//     //           reject("ERROR IN AGORE RTC CLIENT INIT");
//     //         }
//     //       );
//     //     });
//     //     console.log("[+] VIDEO RECORDING STARTS");
//     //     const uid = `${this.state.recordingUid}`;
//     //     // console.log("UUUIIIDDD", uid);
//     //     const acquireRequestData = {
//     //       cname: this.state.channel,
//     //       uid,
//     //       clientRequest: { resourceExpiredHour: 24 }
//     //     };
//     //     let agoraRequestData = {
//     //       url: `https://api.agora.io/v1/apps/${this.state.appId}/cloud_recording/acquire`,
//     //       requestBody: acquireRequestData
//     //     };
//     //     const acquireResponse = await axios.post(
//     //       CONFIG_CONSTANTS.url.SEND_AGORA_REQUEST,
//     //       agoraRequestData
//     //     );
//     //     console.log("AQUIRE RES", acquireResponse);
//     //     const resourceId = acquireResponse.data.result.resourceId;
//     //     const parentDir =
//     //       process.env.REACT_APP_ENV === "production"
//     //         ? "recordings"
//     //         : "stagingRecordings";
//     //     const startRequestData = {
//     //       uid,
//     //       cname: this.state.channel,
//     //       clientRequest: {
//     //         token: this.state.recordingToken,
//     //         recordingConfig: {
//     //           maxIdleTime: 30,
//     //           streamTypes: 2,
//     //           channelType: 0,
//     //           transcodingConfig: {
//     //             height: 480,
//     //             width: 640,
//     //             bitrate: 750,
//     //             fps: 30,
//     //             mixedVideoLayout: 1,
//     //             backgroundColor: "#144166"
//     //           }
//     //         },
//     //         storageConfig: {
//     //           region: 14,
//     //           bucket: "prescription-video-recordings",
//     //           vendor: 1,
//     //           fileNamePrefix: [parentDir, `${this.props.userId}`]
//     //         },
//     //         recordingFileConfig: {
//     //           avFileType: ["hls", "mp4"]
//     //         }
//     //       }
//     //     };
//     //     agoraRequestData = {
//     //       url: `https://api.agora.io/v1/apps/${this.state.appId}/cloud_recording/resourceid/${resourceId}/mode/mix/start`,
//     //       requestBody: startRequestData,
//     //       requestType: "start"
//     //     };
//     //     const startResponse = await axios.post(
//     //       CONFIG_CONSTANTS.url.SEND_AGORA_REQUEST,
//     //       agoraRequestData
//     //     );
//     //     console.log("START RES", startResponse);
//     //     const sid = startResponse.data.result.sid;
//     //     if (this.state.queryIntervalId)
//     //       clearInterval(this.state.queryIntervalId);
//     //     const appId = this.state.appId;
//     //     const tempIntervalId = null;
//     //     // const tempIntervalId = setInterval(async ()=>{
//     //     //   const agoraRequestData = {
//     //     //     url: `https://api.agora.io/v1/apps/${appId}/cloud_recording/resourceid/${resourceId}/sid/${sid}/mode/mix/query`
//     //     //   }
//     //     //   const queryResponse = await axios.post(CONFIG_CONSTANTS.url.SEND_AGORA_GET_REQUEST, agoraRequestData);
//     //     //   console.log("QUERY RES",queryResponse);
//     //     // },1000);
//     //     this.setState({
//     //       sid,
//     //       resourceId,
//     //       queryIntervalId: tempIntervalId
//     //     });
//     //   } catch (err) {
//     //     console.log("ERROR IN VR START", err);
//     //   }
//     // };
//     // this.stopRecording = async () => {
//     //   console.log("[-] VIDEO RECORDING STOPS");
//     //   if (this.state.queryIntervalId) clearInterval(this.state.queryIntervalId);
//     //   try {
//     //     const stopRequestData = {
//     //       cname: this.state.channel,
//     //       uid: `${this.state.recordingUid}`,
//     //       clientRequest: {}
//     //     };
//     //     let agoraRequestData = {
//     //       url: `https://api.agora.io/v1/apps/${this.state.appId}/cloud_recording/resourceid/${this.state.resourceId}/sid/${this.state.sid}/mode/mix/stop`,
//     //       requestBody: stopRequestData
//     //     };
//     //     const stopResponse = await axios.post(
//     //       CONFIG_CONSTANTS.url.SEND_AGORA_REQUEST,
//     //       agoraRequestData
//     //     );
//     //     console.log("STOP RES", stopResponse);
//     //     if (stopResponse.data.success) {
//     //       const saveRecordingRequestData = {
//     //         appointmentId: this.props.userId,
//     //         brand: this.props.brand,
//     //         filePath: stopResponse.data.result.serverResponse.fileList
//     //       };
//     //       const saveResponse = await axios.post(
//     //         CONFIG_CONSTANTS.url.SAVE_VC_RECORDING,
//     //         saveRecordingRequestData
//     //       );
//     //       console.log("SAVE RES", saveResponse);
//     //     }
//     //   } catch (err) {
//     //     console.log("ERROR IN stopRecording", err);
//     //   }
//     // };
//     this.init = async () => {
//       this.props.onJoin && this.props.onJoin();
//       startTime = moment().utcOffset(330).format("HH:mm:ss");
//       const getTokenUrl = CONFIG_CONSTANTS.url.GET_VIDEO_CALL_TOKEN;
//       const getTokenRequestData = {
//         schedule_token: this.props.schedule_token,
//         from: "dochub",
//         appointment_id: this.props.userId
//       };
//       const res = await axios.post(getTokenUrl, getTokenRequestData);
//       rejectedIntervalId = setInterval(this.checkVCRejected, 5 * 1000);
//       this.setState({
//         token: res.data.results.token,
//         uid: res.data.results.uid,
//         recordingUid: res.data.results.recordingUid,
//         recordingToken: res.data.results.recordingToken,
//         appId: res.data.results.appID,
//         channel: res.data.results.channelName
//       });
//       console.log("GET TOKEN RES", res);
//       localStreams = {
//         camera: {
//           id: "",
//           stream: {}
//         },
//         screen: {
//           id: "",
//           stream: {}
//         }
//       };
//       const remoteStreams = {};
//       let patientJoined = false;
//       const startRecording = this.startRecording;
//       const sendFcmNotificationCallback = this.props.sendFcmNotification;
//       const createCameraStream = (uid, client) => {
//         console.log("--4--createCameraStream------");
//         var localStream = AgoraRTC.createStream({
//           streamID: uid,
//           audio: true,
//           video: true,
//           screen: false
//         });
//         console.log("--5--localStream------", localStream);
//         localStream.setVideoProfile(this.cameraVideoProfile);
//         console.log("--6--setVideoProfile------", localStream);
//         localStream.init(
//           function () {
//             console.log("-----7-localStream init done----");
//             // TODO: add check for other streams. play local stream full size if alone in channel
//             localStream.play("small-screen-video"); // play the given stream within the small-screen-video div
//             console.log("-----8--play done---");
//             // publish local stream
//             client.publish(localStream, function (err) {
//               console.log("[ERROR] : publish local stream error: " + err);
//             });

//             // enableUiControls(localStream); // move after testing
//             localStreams.camera.stream = localStream; // keep track of the camera stream for later
//           },
//           function (err) {
//             console.log("[ERROR] : getUserMedia failed", err);
//           }
//         );
//       };
//       var rtc = {
//         client: null,
//         joined: false,
//         published: false,
//         localStream: null,
//         remoteStreams: [],
//         params: {}
//       };
//       var option = {
//         appId: res.data.results.appID,
//         channel: res.data.results.channelName,
//         token: res.data.results.token,
//         uid: res.data.results.uid
//       };
//       client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
//       console.log("--1--client----", client);
//       AgoraRTC.Logger.enableLogUpload();
//       client.init(
//         option.appId,
//         () => {
//           console.log("-------2--init----");
//           client.join(
//             option.token,
//             option.channel,
//             option.uid,
//             function (uid) {
//               console.log("--3---join------", uid);
//               createCameraStream(uid, client);
//               console.log("---9-----");
//               localStreams.camera.id = uid;
//             },
//             function (err) {
//               console.log("[ERROR] : join channel failed", err);
//             }
//           );
//         },
//         function (err) {
//           console.log("[ERROR] : AgoraRTC client init failed", err);
//         }
//       );
//       client.on("stream-published", function (evt) {
//         console.log("------10-----Publish local stream successfully", evt);
//         console.log("PATIENT JOINED", patientJoined);
//         if (!patientJoined) {
//           console.log("DONE DONE");
//           sendFcmNotificationCallback();
//         }
//       });
//       client.on("stream-added", function (evt) {
//         console.log("---11--stream-added---", evt);
//         var stream = evt.stream;
//         var streamId = stream.getId();
//         console.log("new stream added: " + streamId);
//         if (streamId != localStreams.screen.id) {
//           console.log("subscribe to remote stream:" + streamId);
//           client.subscribe(stream, function (err) {
//             console.log("[ERROR] : subscribe stream failed", err);
//           });
//         }
//       });
//       client.on("stream-subscribed", function (evt) {
//         console.log("---12--stream-subscribed---", evt);
//         console.log("PATIENT_JIOINED", patientJoined);
//         patientJoined = true;
//         onPatientJoin();
//         startRecording();
//         callStartTime = new Date().getTime();
//         console.log("CALL START DURATION", callStartTime);
//         var remoteStream = evt.stream;
//         var remoteId = remoteStream.getId();
//         for (const rsId in remoteStreams) {
//           const rs = remoteStreams[rsId];
//           rs.stop();
//         }
//         remoteStreams[remoteId] = remoteStream;
//         console.log("Subscribe remote stream successfully: " + remoteId);
//         const mainStreamId = remoteId;
//         remoteStream.play("full-screen-video");
//         // if( $('#full-screen-video').is(':empty') ) {
//         //   mainStreamId = remoteId;
//         //   remoteStream.play('full-screen-video');
//         //   $('#main-stats-btn').show();
//         //   $('#main-stream-stats-btn').show();
//         // } else if (remoteId == 49024) {
//         //   // move the current main stream to miniview
//         //   remoteStreams[mainStreamId].stop(); // stop the main video stream playback
//         //   client.setRemoteVideoStreamType(remoteStreams[mainStreamId], 1); // subscribe to the low stream
//         //   addRemoteStreamMiniView(remoteStreams[mainStreamId]); // send the main video stream to a container
//         //   // set the screen-share as the main
//         //   mainStreamId = remoteId;
//         //   remoteStream.play('full-screen-video');s
//         // } else {
//         //   client.setRemoteVideoStreamType(remoteStream, 1); // subscribe to the low stream
//         //   addRemoteStreamMiniView(remoteStream);
//         // }
//       });
//       client.on("peer-leave", function (evt) {
//         console.log("---13--peer-leave---", evt);
//         console.log("remote user left ", evt.uid, "reason: ", evt.reason);
//         if (callStartTime > 0) {
//           const callEndTime = new Date().getTime();
//           const duration = Number(
//             ((callEndTime - callStartTime) / 1000).toFixed(0)
//           );
//           totalCallDuration += duration;
//           callStartTime = 0;
//           console.log(
//             "DURATION",
//             duration,
//             "TOTAL DURATION",
//             totalCallDuration
//           );
//         }
//       });
//     };
//     this.updateDuration = async duration => {
//       const date = moment().utcOffset(330).format("YYYY-MM-DD");
//       endTime = moment().utcOffset(330).format("HH:mm:ss");
//       const updateDurationRequestData = {
//         date,
//         startTime,
//         endTime,
//         duration,
//         appointmentId: this.props.userId
//       };
//       await axios
//         .post(
//           CONFIG_CONSTANTS.url.UPDATE_VIDEOCALL_DURATION,
//           updateDurationRequestData
//         )
//         .then(res => {
//           console.log(res);
//         })
//         .catch(err => {
//           console.log("ERROR in /updateVideocallDuration", err);
//         });
//     };
//     this.leaveChannel = () => {
//       if (callStartTime > 0) {
//         const callEndTime = new Date().getTime();
//         const duration = Number(
//           ((callEndTime - callStartTime) / 1000).toFixed(0)
//         );
//         totalCallDuration += duration;
//         callStartTime = 0;
//         console.log("DURATION", duration, "TOTAL DURATION", totalCallDuration);
//       }
//       console.log("FINAL TOTAL CALL DURATION", totalCallDuration);
//       this.updateDuration(totalCallDuration);
//       client.leave &&
//         client.leave(
//           function () {
//             console.log("client leaves channel");
//             console.log("LOCAL STREAM CAMERA", localStreams.camera);
//             localStreams.camera && localStreams.camera.stream.stop(); // stop the camera stream playback
//             client.unpublish && client.unpublish(localStreams.camera.stream); // unpublish the camera stream
//             localStreams.camera && localStreams.camera.stream.close(); // clean up and close the camera stream
//             console.log("Client leave successful");
//             // $("#remote-streams").empty() // clean up the remote feeds
//             // //disable the UI elements
//             // $("#mic-btn").prop("disabled", true);
//             // $("#video-btn").prop("disabled", true);
//             // $("#screen-share-btn").prop("disabled", true);
//             // $("#exit-btn").prop("disabled", true);
//             // // hide the mute/no-video overlays
//             // toggleVisibility("#mute-overlay", false);
//             // toggleVisibility("#no-small-screen-video", false);
//             // // show the modal overlay to join
//             // $("#modalForm").modal("show");
//           },
//           function (err) {
//             console.log("client leave failed ", err); //error handling
//           }
//         );
//       recordingClient.leave &&
//         recordingClient.leave(
//           function () {
//             console.log("RC client leaves channel");
//           },
//           function (err) {
//             console.log("RC client leave failed ", err); //error handling
//           }
//         );
//     };

//     this.endCall = (disableCooloff = false) => {
//       // cut the call from this end
//       this.stopRecording();
//       this.leaveChannel();
//       this.props.onClose(totalCallDuration, disableCooloff);
//       rejectedIntervalId && clearInterval(rejectedIntervalId);
//     };
//     this.onVideoOn = evt => {
//       console.log(localStreams);
//       if (
//         localStreams.camera &&
//         localStreams.camera.stream &&
//         localStreams.camera.stream.enableVideo
//       ) {
//         localStreams.camera.stream.enableVideo();
//         this.setState({ videoOn: true });
//       }
//     };
//     this.onVideoOff = evt => {
//       console.log(localStreams);
//       if (
//         localStreams.camera &&
//         localStreams.camera.stream &&
//         localStreams.camera.stream.disableVideo
//       ) {
//         localStreams.camera.stream.disableVideo();
//         this.setState({ videoOn: false });
//       }
//     };
//     this.onMute = evt => {
//       console.log(localStreams);
//       if (
//         localStreams.camera &&
//         localStreams.camera.stream &&
//         localStreams.camera.stream.disableAudio
//       ) {
//         localStreams.camera.stream.disableAudio();
//         this.setState({ micOn: false });
//       }
//     };
//     this.onUnmute = evt => {
//       console.log(localStreams);
//       if (
//         localStreams.camera &&
//         localStreams.camera.stream &&
//         localStreams.camera.stream.enableAudio
//       ) {
//         localStreams.camera.stream.enableAudio();
//         this.setState({ micOn: true });
//       }
//     };
//     this.switchToPhoneCall = evt => {
//       this.endCall(true);
//       this.props.makeCall(this.props.phone);
//     };
//   }

//   componentDidMount() {
//     if (this.props.instantAppointment) {
//       this.setState({
//         showCallWindow: true
//       });
//       this.init();
//     }
//   }
//   componentDidUpdate(pervProps) {
//     if (
//       this.props.isPhoneCall !== pervProps.isPhoneCall &&
//       this.props.isPhoneCall
//     ) {
//       this.endCall();
//     }
//   }
//   render() {
//     return (
//       <div
//         className={`agora-vc-frame ${this.state.minimized ? "minimized" : ""}`}
//         onClick={evt => {
//           if (this.state.minimized) this.setState({ minimized: false });
//         }}
//       >
//         {this.state.showCallWindow ? (
//           <>
//             <div
//               className={`maximize-icon ${
//                 this.state.minimized ? "minimized" : ""
//               }`}
//             >
//               <center>
//                 <MaximizeIcon style={{ fontSize: "50px" }} />
//               </center>
//             </div>
//             <div
//               id="full-screen-video"
//               className={`full-screen ${
//                 this.state.minimized ? "minimized" : ""
//               }`}
//             ></div>
//             <div
//               id="small-screen-video"
//               // style={{ width: "150px", height: "80px", backgroundColor: "rgb(120,120,120)",  float: "right", position: "relative", bottom: "80px"}}
//               className={`small-screen ${
//                 this.state.minimized ? "minimized" : ""
//               }`}
//             ></div>
//             <div
//               className={`button-container ${
//                 this.state.minimized ? "minimized" : ""
//               }`}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   marginTop: -75
//                 }}
//               >
//                 <Fab
//                   className="vc-action-button"
//                   color="secondary"
//                   style={{ margin: "5px 10px" }}
//                   onClick={this.endCall}
//                 >
//                   <CallEndIcon />
//                   <div className="button-label-wrapper">
//                     <div className="button-label-arrow"></div>
//                     <div className="button-label">End Call</div>
//                   </div>
//                 </Fab>
//                 {this.state.micOn ? (
//                   <Fab
//                     className="vc-action-button"
//                     color="default"
//                     onClick={this.onMute}
//                     style={{ margin: "5px 10px" }}
//                   >
//                     <MicOnIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">Turn Off Mic</div>
//                     </div>
//                   </Fab>
//                 ) : (
//                   <Fab
//                     className="vc-action-button"
//                     onClick={this.onUnmute}
//                     style={{
//                       backgroundColor: "rgb(30,30,30)",
//                       color: "white",
//                       margin: "5px 10px"
//                     }}
//                   >
//                     <MicOffIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">Turn On Mic</div>
//                     </div>
//                   </Fab>
//                 )}
//                 {this.state.videoOn ? (
//                   <Fab
//                     className="vc-action-button"
//                     color="default"
//                     style={{ margin: "5px 10px" }}
//                     onClick={this.onVideoOff}
//                   >
//                     <VideoOnIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">Turn Off Cam</div>
//                     </div>
//                   </Fab>
//                 ) : (
//                   <Fab
//                     className="vc-action-button"
//                     onClick={this.onVideoOn}
//                     style={{
//                       backgroundColor: "rgb(30,30,30)",
//                       color: "white",
//                       margin: "5px 10px"
//                     }}
//                   >
//                     <VideoOffIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">Turn On Cam</div>
//                     </div>
//                   </Fab>
//                 )}
//                 <div
//                   style={{
//                     borderLeft: "1px solid rgb(230,230,230)",
//                     marginLeft: "5px"
//                   }}
//                 >
//                   <Fab
//                     className="vc-action-button"
//                     color="primary"
//                     style={{ margin: "5px 10px" }}
//                     onClick={evt =>
//                       this.setState({ minimized: !this.state.minimized })
//                     }
//                   >
//                     <MinimizeIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">Minimize Call</div>
//                     </div>
//                   </Fab>
//                   <Fab
//                     className="vc-action-button"
//                     color="primary"
//                     style={{ margin: "5px 10px" }}
//                     onClick={this.switchToPhoneCall}
//                   >
//                     <CallIcon />
//                     <div className="button-label-wrapper">
//                       <div className="button-label-arrow"></div>
//                       <div className="button-label">
//                         End Video Call and Start Voice Call
//                       </div>
//                     </div>
//                   </Fab>
//                 </div>
//               </div>
//             </div>
//             <div
//               className="vc-rejected-message"
//               hidden={!this.state.showRejected}
//             >
//               <div className="middle">
//                 <div className="inner">
//                   <div>Patient Rejected the call.</div>
//                   <button
//                     className="close-button"
//                     onClick={evt => this.setState({ showRejected: false })}
//                   >
//                     X
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </>
//         ) : (
//           <center>
//             <Button
//               className="vc-action-button"
//               onClick={() => {
//                 this.setState({ showCallWindow: true });
//                 this.init();
//               }}
//               variant="contained"
//               style={{
//                 marginTop: "50px",
//                 backgroundColor: "rgb(0,100,180)",
//                 color: "white",
//                 width: "150px"
//               }}
//               startIcon={<VideoCam />}
//             >
//               Join Call
//             </Button>
//             <br />
//             <Button
//               className="vc-action-button"
//               color="secondary"
//               onClick={() => {
//                 this.props.onReject
//                   ? this.props.onReject()
//                   : this.props.onClose();
//               }}
//               variant="outlined"
//               style={{ marginTop: "10px", width: "150px" }}
//               startIcon={<CloseIcon />}
//             >
//               CANCEL
//             </Button>
//           </center>
//         )}
//         <div id="main-stats-btn"></div>
//         <div id="main-stream-stats-btn"></div>
//       </div>
//     );
//   }
// }
// export default AgoraVCFrame;
