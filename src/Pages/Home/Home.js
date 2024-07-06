import React from "react";
import SearchForm from "../../Components/SearchForm/SearchForm";
import CocktileList from "../../Components/Cocktile/CocktileList";

function Home() {
  return (
    <main className="">
      <SearchForm />
      <CocktileList />
    </main>
  );
}

export default Home;
