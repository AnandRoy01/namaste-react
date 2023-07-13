import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <div>
    <h1> this is a component !!</h1>
  </div>
);

const element = <h2>This is an element!!!!</h2>;
const Heading = () => (
  <div id="heading">
    <Title />
    {element}
    <h1>Component composition !</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);
