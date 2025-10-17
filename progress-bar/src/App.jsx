import React from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <div className="container">
      <h1>Progress Bar</h1>

      <ProgressBar progress={70} />
    </div>
  );
};

export default App;
