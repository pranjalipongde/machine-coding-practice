import React, { useEffect, useState } from "react";

const DarkAndLightTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-white dark:text-white transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">
        React Dark and Light Theme machine coding
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-gray-800 font-bold text-white dark:bg-gray-200 dark:text-black rounded cursor-pointer"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default DarkAndLightTheme;
