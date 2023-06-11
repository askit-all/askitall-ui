import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user }) => {
  const ref = useRef();

  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      Uid: {user.uid}
      <div
        ref={ref}
        style={{ width: '600px', height: '400px' }}
      ></div>
    </div>
  );
};