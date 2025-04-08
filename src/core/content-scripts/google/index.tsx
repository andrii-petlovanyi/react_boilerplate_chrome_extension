import React from "react";
import { createRoot } from "react-dom/client";
import { Hello } from "@/components/Hello";

const container = document.createElement("div");
document.body.appendChild(container);
document.body.style.position = "relative";

const root = createRoot(container);

root.render(
  <div className={"pean"}>
    <Hello />
  </div>
);
