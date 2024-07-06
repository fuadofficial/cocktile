import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About/About";
import SingleCocktail from "../Pages/CocktailDetails/SingleCocktail";

function LayoutRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
}

export default LayoutRouter;
