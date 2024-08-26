import React from "react";
import Error from "../images/Error.png";
const ErrorPage = () => {
  return (
    <div className="w-full flex justify-center items-center mt-20   flex-col">
      <img src={Error} className="  w-80 h-80 mt-32 " alt="" />
      <h1 className="text-3xl py-4 mb-8  ">An Error Ocured </h1>
    </div>
  );
};

export default ErrorPage;
