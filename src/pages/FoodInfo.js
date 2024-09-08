import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../componets/Loader";
import ErrorPage from "../componets/ErrorPage";
import { useNavigate } from "react-router-dom";
const FoodInfo = () => {
  const { state } = useLocation();
  const [FoodData, setFoodData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Infodata, setInfodata] = useState(null);
  const [recipes, setrecipes] = useState([]);
  const [Error, setError] = useState(false);

  const navigat = useNavigate();

  useEffect(() => {
    const Data = state?.data;
    setFoodData(Data);
  }, [state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (FoodData) {
          const response = await fetch(
            `https://api.spoonacular.com/food/images/analyze?apiKey=apiKey=${process.env.REACT_APP_API_KEY}&imageUrl=${FoodData.image}`
          );
          const infoData = await response.json();
          if (response.ok) {
            setInfodata(infoData);
            setrecipes(infoData.recipes);
          } else {
            setError(true);
            throw new Error(infoData.message || "än error ocured");
          }
        } else {
          console.error("No FoodData available for fetching");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (FoodData) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [FoodData]);

  useEffect(() => {
    if (Infodata) {
      console.log("info data", Infodata);
    }
  }, [Infodata]);

  if (Loading) {
    return <Loader />;
  }

  if (Error) {
    setTimeout(() => {
      navigat("/");
    }, 10000);
    return <ErrorPage />;
  }

  const { name, image, content } = FoodData;

  return (
    <div className="w-full  font-serif bg-white flex justify-center items-center flex-col ">
      <img
        className="w-full object-cover h-96  "
        src="https://images.unsplash.com/photo-1591267789076-2ea305ab92ec?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        srcset=""
      />
      <div className="lg:w-9/12  sm:w-10/12  w-full">
        {/* product main info  */}
        <section class="py-6 bg-white md:py-16   antialiased">
          <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div class="lg:grid lg:grid-cols-2 lg:gap-8  xl:gap-16 rounded-lg">
              <div class="shrink-0  flex flex-col justify-center items-center gap-4 ">
                <img
                  class="w-full  object-fill rounded-xl shadow-xl"
                  src={image}
                  alt=""
                />
                <div class="mt-6 w-full flex justify-start px-3 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                  <a
                    title=""
                    class="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-sky-400 rounded-lg border border-gray-200 hover:bg-sky-200 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
                    role="button"
                  >
                    <svg
                      class="w-5 h-5 -ms-2 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                      />
                    </svg>
                    Add to favorites
                  </a>
                </div>
              </div>

              <div class="mt-6 sm:mt-8 lg:mt-0 ">
                <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl px-2 py-2 ">
                  {name}
                </h1>

                {/* <hr class="my-6 md:my-8 border-gray-200 /> */}

                <p
                  class="mb-6 text-gray-500 mt-3 text-justify indent-8  px-2"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></p>
              </div>
            </div>
          </div>
        </section>

        {/* product detail info  */}

        {Infodata !== null && Infodata !== undefined ? (
          <div className="w-full">
            <section class="bg-white py-8 antialiased   md:py-16">
              <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div class="mx-auto max-w-5xl">
                  <div class="gap-4 sm:flex sm:items-center sm:justify-between">
                    <h2 class="text-xl font-semibold text-gray-900  sm:text-2xl">
                      Nutrition
                    </h2>
                  </div>

                  <div class="mt-6 flow-root px-3  justify-center sm:mt-8">
                    <div class="divide-y w-full  divide-gray-200 ">
                      <div class="flex flex-wrap items-center gap-y-4 py-6">
                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                          <dt class="text-base font-medium text-gray-500 ">
                            Category
                          </dt>
                          <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                            <p class="hover:underline">
                              {Infodata.category.name}
                            </p>
                          </dd>
                        </dl>
                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                          <dt class="text-base font-medium text-gray-500 ">
                            Calories
                          </dt>
                          <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                            <p class="hover:underline">
                              {Infodata.nutrition.calories.value}
                            </p>
                          </dd>
                        </dl>

                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                          <dt class="text-base font-medium text-gray-500 ">
                            Fat
                          </dt>
                          <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                            {Infodata.nutrition.fat.value}
                          </dd>
                        </dl>

                        <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                          <dt class="text-base font-medium text-gray-500 ">
                            Protin
                          </dt>
                          <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                            {Infodata.nutrition.protein.value}
                          </dd>
                        </dl>

                        <dl class="w-1/2  sm:w-1/4 lg:w-auto lg:flex-1">
                          <dt class="text-base font-medium text-gray-500 ">
                            Carbs
                          </dt>
                          <dd class="mt-1.5 text-base font-semibold text-gray-900 ">
                            {Infodata.nutrition.carbs.value}
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <Loader />
        )}

        {/* product recipes  */}
        <section class="bg-white py-8 antialiased   md:py-12">
          <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            {/* <!-- Heading & Filters --> */}
            <div class="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
              <div className="w-full ">
                <h2 class="mt-3 text-2xl text-center font-semibold text-gray-900  sm:text-2xl">
                  Releted Recipes
                </h2>
              </div>
            </div>

            {/* recipes list  */}
            <div class="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4  place-content-center">
              {recipes.map((items) => {
                return (
                  <div class="rounded-lg    p-2 shadow-sm ">
                    <div class="pt-6 text-center">
                      <a
                        href={items.url}
                        class="text-lg font-semibold leading-tight text-gray-900 hover:underline "
                      >
                        {items.title}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FoodInfo;
