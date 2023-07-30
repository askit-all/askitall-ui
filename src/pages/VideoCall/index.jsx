import React, { CSSProperties, useEffect, useState } from 'react';
import AgoraUIKit, { layout } from 'agora-react-uikit';
import 'agora-react-uikit/dist/index.css';
import { secured } from "api/interceptors";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

const VideoCall = () => {
  const history = useNavigate();

  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState('');
  const [channel, setChannel] = useState('user1--user2');
  const [agoraToken, setAgoraToken] = useState('006e27fafd3d0c24c3da5fc2a25d546c40fIABY0cWQWEjhJhAe+9zZpn3Svf8dORio2KDLjvbFgZnvEbseIsY9idUzIgBEciznU1CWZAQAAQDjDJVkAgDjDJVkAwDjDJVkBADjDJVk');
  const [appID, setAppId] = useState('e27fafd3d0c24c3da5fc2a25d546c40f');
  const [uid, setUserId] = useState('');
  const { bookingId } = useParams();
  
  useEffect(() => { 
    async function getAgoraToken() {
      try {
        // Fetch the token from the API
        const response = await secured.get(`/rtc?bookingId=${bookingId}`);
        const tokenData = response?.data?.data;
        if (tokenData) {
          setChannel(tokenData?.channel);
          setAgoraToken(tokenData?.token);
          setVideocall(true);
          setUserId(tokenData?.user_id)

          if(tokenData?.channel && tokenData?.user_id){
             acquireCloudRecording(tokenData?.channel);
          }
        }
      } catch (error) {
        const message = error.response.data.message || "Something went wrong";
        toast.error(message);
        history("/profile");
      }
    }
    getAgoraToken();
  }, []);


  async function acquireCloudRecording(channel, bookingId){
    const response = await secured.post("/rtc/recording", {
        channel,
        bookingId
    });
    console.log(response);
  }

  const stopRecording = async() =>{
    const response = await secured.post("/rtc/stop-recording", {
      bookingId
    });
    console.log(response);
  } 

  const handleEndCall = async() => {
    setVideocall(false);
    await stopRecording();
    history("/questionnaire");
  }
  return (  
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        {videocall && channel && agoraToken ? (
          <AgoraUIKit
            rtcProps={{
              appId: appID,
              channel: channel,
              token: agoraToken, // add your token if using app in secured mode
              uid : uid,
              layout: isPinned ? layout.pin : layout.grid,
              enableScreensharing: true,
              disableRtm:true
            }}
            rtmProps={{ username: username || 'user', displayUsername: true }}
            callbacks={{
              EndCall : handleEndCall
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flex: 1,
      backgroundColor: '#007bff22'
    },
    heading: { textAlign: 'center', marginBottom: 0 },
    videoContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    },
    nav: { display: 'flex', justifyContent: 'space-around' },
    btn: {
      backgroundColor: '#007bff',
      cursor: 'pointer',
      borderRadius: 5,
      padding: '4px 8px',
      color: '#ffffff',
      fontSize: 20
    },
    input: { display: 'flex', height: 24, alignSelf: 'center' }
  };
  

export default VideoCall;
