import React from "react";
import "./App.css";
import DarkAndLightTheme from "./components/DarkAndLightTheme";
import DarkLightTheme from "./components/DarkLightTheme";
import BlogPosts from "./components/blog/BlogPosts.jsx";
import GetWeekday from "./components/getWeekday/GetWeekDay.jsx";

function App() {
  return (
    <>
      <DarkAndLightTheme />
      <DarkLightTheme />
      <BlogPosts />
      <GetWeekday />
    </>
  );
}

export default App;
