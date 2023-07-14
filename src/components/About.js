import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name="John" location="Unknown" />
      <UserClass name="John" location="Unknown" />
    </div>
  );
};

export default About;
