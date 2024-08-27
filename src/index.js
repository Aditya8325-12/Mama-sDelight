import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FoodInfo from "./pages/FoodInfo";
import Head from "./componets/Head";
import Footer from "./componets/Footer";
import Recipes from "./pages/Recipes";
import About from "./pages/About";
import Contact from "./pages/Contact";

import store from "./Reducer/index";
import { Provider } from "react-redux";
import SingelRecipe from "./pages/SingelRecipe";
import Food from "./pages/Food";
import Home from "./pages/Home";
store.subscribe(() => {
  console.log(store.getState());
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/foodInfo" Component={FoodInfo} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/SingleRecipes" Component={SingelRecipe} />
          <Route path="/Food" Component={Food} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
