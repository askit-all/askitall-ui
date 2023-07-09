import React, { CSSProperties, useEffect, useState } from 'react';
import AgoraUIKit, { layout } from 'agora-react-uikit';
import 'agora-react-uikit/dist/index.css';
import { secured } from "api/interceptors";

const VideoCall = () => {
  const [videocall, setVideocall] = useState(true);
  const [isHost, setHost] = useState(true);
  const [isPinned, setPinned] = useState(false);
  const [username, setUsername] = useState('');
  const [channel, setChannel] = useState('user1--user2');
  const [agoraToken, setAgoraToken] = useState('006e27fafd3d0c24c3da5fc2a25d546c40fIABY0cWQWEjhJhAe+9zZpn3Svf8dORio2KDLjvbFgZnvEbseIsY9idUzIgBEciznU1CWZAQAAQDjDJVkAgDjDJVkAwDjDJVkBADjDJVk');
  const [appID, setAppId] = useState('e27fafd3d0c24c3da5fc2a25d546c40f');
  const [uid, setUserId] = useState('');



  useEffect(() => {
    async function getAgoraToken() {
      try {
        // Fetch the token from the API
        const response = await secured.get("/rtc");
        const tokenData = response?.data?.data;
        if (tokenData) {
          console.log("token", tokenData)
          setChannel(tokenData?.channel);
          setAgoraToken(tokenData?.token);
          setVideocall(true);
          setUserId(tokenData?.user_id)
        }
      } catch (error) {
        console.log("Error fetching Agora token:", error);
      }
    }
    getAgoraToken();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.videoContainer}>
        <h1 style={styles.heading}>Agora React Web UI Kit</h1>
        {videocall && channel && agoraToken ? (
          <AgoraUIKit
            rtcProps={{
              appId: appID,
              channel: channel,
              token: agoraToken, // add your token if using app in secured mode
              uid : uid,
              layout: isPinned ? layout.pin : layout.grid,
              enableScreensharing: true
            }}
            rtmProps={{ username: username || 'user', displayUsername: true }}
            callbacks={{
              EndCall: () => setVideocall(false)
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
