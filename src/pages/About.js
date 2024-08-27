import { Link } from "react-router-dom";
import logo from "../images/logo.png";
const About = () => {
  return (
    <div className="w-full ">
      <div className="w-full lg:flex  hidden justify-center items-center   ">
        <img
          className=" relative object-cover "
          style={{ height: 700, width: "100%" }}
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          srcset=""
        />
        <div className="absolute   right-0 w-6/12  pr-10   my-10">
          <div class="text-end ">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Guide Recipes <br></br> & Food Info
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Find quick and easy recipes, nutritional facts, and all things
              food-related. Perfect for home cooks and food enthusiasts alike.
            </p>
            <div class="mt-10 flex items-center justify-end pr-5 gap-x-6">
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

      <div className="w-full lg:hidden flex  justify-center items-center  ">
        <img
          className=" relative object-cover "
          style={{ height: 700, width: "100%" }}
          src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

      <section class="bg-white ">
        <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div class="font-light text-gray-500 sm:text-lg ">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              A Taste of Home in Every Bite
            </h2>
            <p class="mb-4">
              At Mama’s Delight, we believe that cooking should be easy, fun,
              and full of flavor. Our recipes are designed to bring the warmth
              and comfort of home-cooked meals to your kitchen, no matter where
              you are. From traditional favorites to exciting new dishes, we
              make sure every meal is a delight.
            </p>
            <p>
              Our team is passionate about food and dedicated to sharing the joy
              of cooking with you. Whether you're a novice cook or a culinary
              expert, we offer recipes that are simple to follow and guaranteed
              to satisfy. Join us in exploring a world of taste, one dish at a
              time.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <img
              class="w-full rounded-lg"
              src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cooking in kitchen"
            />
            <img
              class="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Delicious food on plate"
            />
          </div>
        </div>
      </section>

      <div className="w-full flex justify-center items-center mt-5  overflow-hidden">
        <div class="flex w-10/12  items-center   justify-center space-x-6 lg:space-x-8">
          <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
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

          <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
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
          <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
            <div class="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
            <div class="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://plus.unsplash.com/premium_photo-1673809798970-30c14cfd0ab6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div class="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div class="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="flex justify-center items-center gap-5">
            <img class=" h-12" src={logo} alt="" />
            <h1 className="text-2xl font-bold">Mama’s Delight</h1>
          </div>
          <figure class="mt-10">
            <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Discover the joy of cooking with Mama’s Delight. Our recipes
                bring warmth and flavor to your kitchen, creating meals that are
                both satisfying and memorable.”
              </p>
            </blockquote>
            <figcaption class="mt-10">
              <img
                class="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                <div class="font-semibold text-gray-900">Aditya Dhutraj</div>

                {/* <div class="text-gray-600">CEO of Workcation</div> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default About;
