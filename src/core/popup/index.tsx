import React from "react";
import { createRoot } from "react-dom/client";

const container = document.createElement("div");
document.body.appendChild(container);

const root = createRoot(container);

root.render(
  <div style={{ width: "200px", height: "70px", fontSize: "16px" }}>
    Please visited google.com for view injected components
  </div>
);
