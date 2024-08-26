import React from "react";
import spinner from "../images/spinner.png";
import search from "../images/search.gif";
const Loader = () => {
  return (
    <div className="w-full mt-64 mb-64 flex justify-center items-center flex-col gap-5 ">
      <img src={search} className="w-40 h-40  " alt="" srcset="" />
      <img src={spinner} className="w-h-8 h-8 animate-spin " alt="" srcset="" />
      <h1 className="text-2xl ">Loading ...</h1>
    </div>
  );
};

export default Loader;
