import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../../Hooks/Context";
import Loading from "../Loader/Loading";

function CocktailList() {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No Cocktails Found</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">COCKTAILS</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CocktailList;
