import React from "react";

const imgUrl = chrome.runtime.getURL("assets/icon16.png");

export const Greeting = () => {
  return (
    <div className={"pean__hello"}>
      Hello, this is your first Chrome extension
      <img src={imgUrl} alt="Test icon" width={20} height={20} />
    </div>
  );
};
