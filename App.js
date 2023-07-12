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
          "div",
          {
            key: 11,
          },
          "sibling 1"
        ),
        React.createElement(
          "div",
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
          "div",
          {
            key: 21,
          },
          "sibling 1"
        ),
        React.createElement(
          "div",
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
