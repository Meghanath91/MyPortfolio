import React, { useState, useEffect } from "react";
import './progress.css'

const ProgressBar = () => {
  // const [value, setValue] = useState(0);
  // useEffect(() => {
  //   setValue(100);
  // });
  return (
   
      <div className="progress-div" style={{ width: "10px" }}>
        <div style={{ width: "100px" }} className="progress">Git</div>
      </div>
    
  );
};
export default ProgressBar;
