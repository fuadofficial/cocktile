import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About/About";
import SingleCocktail from "../Pages/CocktailDetails/SingleCocktail";
import NoDataFound from "../Pages/NoDataFound/NoDataFound";

function LayoutRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="/*" element={<NoDataFound />} />
      </Routes>
    </Router>
  );
}

export default LayoutRouter;
