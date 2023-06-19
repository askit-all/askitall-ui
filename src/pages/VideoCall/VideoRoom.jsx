import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './videoPlayer';
import { secured } from "api/interceptors";
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash  } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import './videoRoom.css';

const APP_ID = 'e27fafd3d0c24c3da5fc2a25d546c40f';


const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [token, setAgoraToken] = useState("");
  const [channel, setChannel] = useState("");
  const [uid, setUid] = useState("");
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  


  useEffect(()=>{
    async function getAgoraToken(){
      const getTokenInfo = await secured.get("/rtc");
      const tokenData = getTokenInfo?.data?.data;
      if(tokenData){
        setAgoraToken(tokenData?.token);
        setChannel(tokenData?.channel);
        setUid(tokenData?.user_id);

      }

    }

    getAgoraToken()
  },[])

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((prevUsers) => {
        return [...prevUsers, user];
      });
    }
    if (mediaType === "audio") {
      user.audioTrack?.play();
    }
  };

  const handleUserLeft = (user) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((User) => User.uid !== user.uid);
    });
  };

  const handleUserUnpublish = (user, type) => {
    if (type === "audio") {
      user.audioTrack?.stop();
    }
    if (type === "video") {
      setUsers((prevUsers) => {
        return prevUsers.filter((User) => User.uid !== user.uid);
      });
    }
  }

  useEffect(() => {
    
    if(token && channel && uid){
      client.on('user-published', handleUserJoined);
      client.on('user-left', handleUserLeft);
      client.on('user-unpublished', handleUserUnpublish);

      client
        .join(APP_ID, channel, token, uid)
        .then((uid) =>
          Promise.all([
            AgoraRTC.createMicrophoneAndCameraTracks(),
            uid,
          ])
        )
        .then(([tracks, uid]) => {
          const [audioTrack, videoTrack] = tracks;
          setLocalTracks(tracks);
          setUsers((previousUsers) => [
            ...previousUsers,
            {
              uid,
              videoTrack,
              audioTrack,
            },
          ]);
          client.publish(tracks);
        });
  
      return () => {
        for (let localTrack of localTracks) {
          localTrack.stop();
          localTrack.close();
        }
        client.off('user-published', handleUserJoined);
        client.off('user-left', handleUserLeft);
        // client.unpublish(tracks).then(() => client.leave());
        client.unpublish(localTracks).then(() => client.leave());
      };
    }
    
  }, [token, channel, uid]);

  const toggleMicrophone = () => {
    if (localTracks[0]) {
      const enabled = !microphoneEnabled;
      localTracks[0].setEnabled(enabled);
      setMicrophoneEnabled(enabled);
    }
  };

  const toggleVideo = () => {
    if (localTracks[1]) {
      const enabled = !videoEnabled;
      localTracks[1].setEnabled(enabled);
      setVideoEnabled(enabled);
    }
  };

  const handleEndCall = async() => {
    try {
      client.unpublish(localTracks).then(() => client.leave());
      navigate("/mentee");
    } catch (error) {
      console.error('Failed to end the call:', error);
    }
  }

  return (
    <div className="video-room-container">
      <div className="custom-flex w-full">
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
      <div className="controls-container mt-2">
        <button
          className={`control-button ${microphoneEnabled ? 'active' : ''}`}
          onClick={toggleMicrophone}
        >
          {microphoneEnabled ? (
            <FaMicrophone />
          ) : (
            <FaMicrophoneSlash />
          )}
        </button>
        <button
          className={`control-button ${videoEnabled ? 'active' : ''}`}
          onClick={toggleVideo}
        >
          {videoEnabled ? <FaVideo /> : <FaVideoSlash />}
        </button>
        <button
          className={`control-button}`}
          onClick={handleEndCall}
        >
          <FaPhoneSlash size={24} />
        </button>
      </div>
    </div>
  );
};