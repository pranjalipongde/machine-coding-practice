import React, { useState } from "react";
import "./tabs.css";

const Tabs = ({ tabsdata }) => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="tab_container">
      <div className="tabs_header">
        {tabsdata.map((item, index) => (
          <button
            className={currentTab === index ? "active_tab" : "tab"}
            onClick={() => setCurrentTab(index)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="tabs_content">
        <p>{tabsdata[currentTab].content}</p>
      </div>
    </div>
  );
};

export default Tabs;
