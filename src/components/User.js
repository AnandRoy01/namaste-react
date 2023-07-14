import React, { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inclrease by 1
      </button>
      <h3>Name: {name}</h3>
      <h3>Location: {location}</h3>
      <h3>contact: john@doe.com</h3>
    </div>
  );
};

export default User;
