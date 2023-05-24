import React from "react";
import { createRoot } from "react-dom/client";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <div className={"pean__options"}>
    <h1>This is options page</h1>
  </div>
);
