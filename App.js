import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child1",
        key: 1,
      },
      [
        React.createElement(
          "h1",
          {
            key: 11,
          },
          "sibling 1"
        ),
        React.createElement(
          "h2",
          {
            key: 12,
          },
          "sibling 2"
        ),
      ]
    ),

    React.createElement(
      "div",
      {
        id: "child2",
        key: 2,
      },
      [
        React.createElement(
          "h1",
          {
            key: 21,
          },
          "sibling 1"
        ),
        React.createElement(
          "h2",
          {
            key: 22,
          },
          "sibling 2"
        ),
      ]
    ),
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
