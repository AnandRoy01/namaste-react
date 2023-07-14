import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log(err);
  return (
    <>
      <h1>Error: Something went wrong</h1>
      <h3>
        {err.status} &nbsp;
        {err.statusText}
      </h3>
    </>
  );
};

export default Error;
