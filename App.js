import React from "react";
import ReactDOM from "react-dom/client";

// JSX => bable transpiles it to React.createElement => ReactElement( JS Object) => HTML

const parent = (
  <div>
    <div id="child1">
      <h1>sibling 1</h1>
      <h2>sibling 2</h2>
    </div>
    <div id="child2">
      <h1>sibling 1</h1>
      <h2>sibling 2</h2>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
