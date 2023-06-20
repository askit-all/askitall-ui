import React, { useEffect, useRef } from 'react';
import './videoRoom.css';
export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    if(user.videoTrack){
      user.videoTrack.play(ref.current);
    }
  }, [user.videoTrack]);

  return (
    <div>
      Uid: {user.uid}
      <div
        ref={ref}
        className='custom-size'
      ></div>
    </div>
  );
};