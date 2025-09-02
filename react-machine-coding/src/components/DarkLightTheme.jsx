import React, { useEffect, useState } from "react";
import "../App.css";

const DarkLightTheme = () => {
  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "Light" ? "light-mode" : "dark-mode");
  }, [theme]);

  const handleToggle = () => {
    setTheme(theme === "Light" ? "Dark" : "Light");
  };

  return (
    <div>
      <div className={`container`}>
        <h1>Dark Mode Toggle</h1>
        <div className="toggle-container">
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "Dark"}
              onChange={handleToggle}
            />
            <span className="slider round "></span>
          </label>
          <span className="mode-text">
            {" "}
            {theme === "Light" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DarkLightTheme;
