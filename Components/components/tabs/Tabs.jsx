"use client";
import React, { useState } from "react";

const Tabs = ({ tabList }) => {
  const [activeTab, setActiveTab] = useState(tabList[0]);

  const handleTabClick = (id) => {
    if (!id) return;

    const itemToActive = tabList.filter((item) => item.id === id);
    setActiveTab(...itemToActive);
  };

  return (
    <div className="flex flex-col items-start justify-center shadow-lg bg-purple-200 p-2">
      <div className="w-full flex items-center justify-stretch gap-3 rounded-md bg-blue-300 text-black p-1">
        {tabList?.map((item) => (
          <div
            key={item.id + "tab"}
            className="rounded-md shadow-md bg-yellow-300 p-2"
            onClick={() => handleTabClick(item.id)}
          >
            {item.title}
          </div>
        ))}
      </div>

      <div className="w-full h-96 border shadow-lg rounded-lg my-2 p-2 bg-rose-500">
        {activeTab && activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
