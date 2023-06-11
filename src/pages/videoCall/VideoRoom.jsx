import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './videoPlayer';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from 'react-icons/fa';
import './videoRoom.css';

const APP_ID = '9302e851b7b2426aacf43a39088a832c';
const TOKEN =
  '007eJxTYLh47qYyo34g81ypa0e0kpTW7v2hEfJXUIwzP2yaWeeD+wwKDJbGBkapFqaGSeZJRiZGZomJyWkmxonGlgYWFokWxkbJT9a3pjQEMjJE7exiYIRCEJ+FIcQ1OISBAQDF5x2i';
const CHANNEL = 'TEST';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

export const VideoRoom = () => {
  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [microphoneEnabled, setMicrophoneEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const handleUserJoined = async (user, mediaType, track) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers((previousUsers) => [
        ...previousUsers,
        { ...user, videoTrack: track },
      ]);
    }

    if (mediaType === 'audio') {
      setUsers((previousUsers) => [
        ...previousUsers,
        { ...user, audioTrack: track },
      ]);
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

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

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
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
      localTracks.forEach((track) => {
        track.stop();
        track.close();
      });
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish(localTracks).then(() => client.leave());
    };
  }, []);

  return (
    <div className="video-room-container">
      <div className="video-grid">
        {users.map((user) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
      <div className="controls-container">
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
      </div>
    </div>
  );
};
