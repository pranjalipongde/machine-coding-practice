import React from "react";
import "./App.css";
import DarkAndLightTheme from "./components/DarkAndLightTheme";
import DarkLightTheme from "./components/DarkLightTheme";
import BlogPosts from "./components/BlogPosts";

function App() {
  return (
    <>
      <DarkAndLightTheme />
      <DarkLightTheme />
      <BlogPosts />
    </>
  );
}

export default App;
