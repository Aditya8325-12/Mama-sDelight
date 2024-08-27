import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col   ">
      <div className="w-full flex  justify-center items-center  ">
        <img
          className=" relative object-cover "
          style={{ height: 700, width: "100%" }}
          src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
        <div className="absolute w-full px-2 lg:w-6/12  sm:w-10/12     my-10">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Guide <br></br>Recipes and Food Info
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Find quick and easy recipes, nutritional facts, and all things
              food-related. Perfect for home cooks and food enthusiasts alike.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/recipes"}
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link
                to={"/"}
                class="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="relative w-11/12 overflow-hidden mt-20 bg-white">
        <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div class="sm:max-w-lg">
              <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Fresh Recipes Await You
              </h1>
              <p class="mt-4 text-xl text-gray-500">
                Dive into our latest collection of recipes that make every meal
                a delight. Discover easy-to-follow instructions and nutritional
                insights to enhance your cooking experience.
              </p>
            </div>
            <div>
              <div class="mt-10">
                {/* <!-- Decorative image grid --> */}
                <div
                  aria-hidden="true"
                  class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div class="flex items-center space-x-6 lg:space-x-8">
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1505253668822-42074d58a7c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1506802913710-40e2e66339c9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div class="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Link
                  to={"/recipes"}
                  class="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="w-11/12 mt-5  ">
        <div class="gap-16 items-center py-8  mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 ">
          <div class="grid grid-cols-2 gap-4 mt-8 ">
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1674555650084-ae4c3dcfe79c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 1"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1621792907789-666f0e69ea03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="office content 2"
            />
          </div>
          <div class="font-light text-gray-500 sm:text-lg mt-6 sm:mt-2 ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Cooking Made Simple and Fun
            </h2>
            <p class="mb-4">
              At Mama’s Delight, we bring you easy and delicious recipes to
              inspire your cooking. Whether you're a beginner or a pro, our
              dishes are crafted to bring joy to your kitchen.
            </p>
            <p>
              Discover a world of flavors and enjoy every moment of your cooking
              journey with us.
            </p>
            <Link
              to={"/Food"}
              class="inline-block mt-5 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>

      <div class="bg-white lg:w-10/12 w-full lg:my-24 my-12  lg:py-32">
        <div class="w-full flex flex-col items-center justify-center px-6 lg:px-8">
          <div class="lg:w-9/12  w-full text-center  md:px-12 sm:px-6">
            <h2 class="text-base font-semibold leading-7 text-indigo-600">
              Savor the Flavor
            </h2>
            <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Discover Delicious Recipes and Cooking Tips
            </p>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Dive into our collection of delightful recipes, each crafted to
              bring joy to your taste buds. From quick snacks to gourmet meals,
              we have everything you need to make every meal a special occasion.
            </p>
          </div>
          <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </div>
                  Quick & Easy Recipes
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Enjoy a variety of recipes that are simple to prepare, perfect
                  for busy days. Our step-by-step guides ensure you can whip up
                  a delicious meal in no time.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  Healthy Options
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Find nutritious and delicious recipes that are good for your
                  body and soul. From low-calorie dishes to superfood-packed
                  meals, we have something for every health-conscious cook.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                  Seasonal Favorites
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Explore our collection of seasonal recipes that celebrate the
                  flavors of each season. From summer salads to winter warmers,
                  find the perfect dish for any time of the year.
                </dd>
              </div>
              <div class="relative pl-16">
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <svg
                      class="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"
                      />
                    </svg>
                  </div>
                  Tips for Home Chefs
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  Enhance your cooking skills with our expert tips and tricks.
                  Whether you're a beginner or a seasoned chef, we have advice
                  that will make your cooking experience more enjoyable and
                  successful.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
