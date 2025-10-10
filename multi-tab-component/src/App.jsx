import React from "react";
import "./App.css";
import Tabs from "./components/Tabs";
import tabs from "./data/tabData.json";

function App() {
  return (
    <div>
      <Tabs tabsdata={tabs} />
    </div>
  );
}

export default App;
