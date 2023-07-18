import React, { useState, useEffect } from 'react';
import "./progressBar.css";
const ProgressBar = ({ progress, duration }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Calculate the percentage progress based on the current progress and duration
    const percentage = (progress / duration) * 100;
    setWidth(percentage);
  }, [progress, duration]);

  return (
    <div className="progress-bar">
      <div className="progress-bar-inner" style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;