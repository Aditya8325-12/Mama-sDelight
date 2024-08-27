import React, { useState, useEffect } from "react";
import dish from "../images/dishes.png";
import Loader from "../componets/Loader.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { loadingstate } from "./Actions/index.js";

import { changeLoadingState } from "../Reducer/LoadingReducer.jsx";

function Food() {
  const [Data, setData] = useState([]);
  const Apikey = process.env.REACT_APP_API_KEY;

  const Loading = useSelector((state) => {
    return state.Loading;
  });

  const Dispatch = useDispatch();
  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        Dispatch(changeLoadingState(true));
        const response = await fetch(
          `https://api.spoonacular.com/food/search?apiKey=${Apikey}&number=6`
        );
        Dispatch(changeLoadingState(false));
        const data = await response.json();
        setData(data.searchResults.flatMap((item) => item.results));
        console.log("data==", Data);
      } catch (error) {
        Dispatch(changeLoadingState(false));
      }
    };
    fetchData();
  }, []);

  const searchdata = async (e) => {
    e.preventDefault();
    try {
      if (searchName !== "") {
        Dispatch(changeLoadingState(true));
        const response = await fetch(
          `https://api.spoonacular.com/food/search?apiKey=c180356eb2ca459f8b71b27f1efe2eec&query=${searchName}`
        );
        const data = await response.json();
        setData(data.searchResults.flatMap((item) => item.results));
        Dispatch(changeLoadingState(false));
        setsearchName("");
      }
    } catch (error) {
      Dispatch(changeLoadingState(false));
    }
  };

  return (
    <div className="w-full">
      <div className="w-full flex  justify-center items-center   ">
        <img
          className=" relative object-cover "
          style={{ height: 700, width: "100%" }}
          src="https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
        <div className="absolute lg:w-7/12 w-full px-10 my-10">
          <h1 class="text-2xl text-center font-bold tracking-tight text-gray-900 md:text-4xl lg:text-6xl my-3">
            Where Every Meal Tells a Story!
          </h1>

          <form
            class=" mx-auto  mt-5 max-w-lg"
            onSubmit={(e) => {
              searchdata(e);
            }}
          >
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Search Mockups, Logos..."
                required
                value={searchName}
                onChange={(e) => {
                  setsearchName(e.target.value);
                }}
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      {Data.length > 0 ? (
        <div className="w-full flex   items-center font-serif bg-white   flex-col">
          {Loading ? (
            <Loader />
          ) : (
            <div className="mb-4 lg:w-9/12 sm:px-4 px-2 w-full py-6 mt-10 grid gap-8 grid-cols-1 md:mb-8 md:grid-cols-2 xl:grid-cols-3">
              {Data.map((items) => {
                if (
                  items.image !== undefined &&
                  items.name !== undefined &&
                  items.name !== ""
                ) {
                  return (
                    <Link to={"/foodInfo"} state={{ data: items }}>
                      <div class="rounded-lg border border-gray-200  px-0  shadow-sm ">
                        <div class="h-56 w-full rounded-lg">
                          <img
                            class="mx-auto h-full object-cover  rounded-t-lg w-full"
                            src={items.image}
                            alt=""
                          />
                        </div>
                        <div class="py-6 ps-6">
                          <p class="text-lg font-semibold leading-tight text-gray-900 hover:underline ">
                            {items.name}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      ) : (
        <main class="grid min-h-full place-items-center bg-white px-6 py-24  sm:py-52 lg:px-8">
          <div class="text-center">
            <p class="text-base font-semibold text-indigo-600">404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Data not found
            </h1>
            <p class="mt-6 text-base leading-7 text-gray-600">
              Sorry, we couldn’t find the data you’re looking for.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/"}
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <Link to={"/contact"} class="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default Food;
