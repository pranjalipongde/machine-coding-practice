import React, { useEffect, useState } from "react";
import "./progress.css";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          //width: `${progress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: animatedProgress < 5 ? "white" : "black",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
