import React from "react";
import Cocktail from "./Cocktail";
import { useGlobalContext } from "../../Hooks/Context";
import Loading from "../Loader/Loading";

function CocktileList() {
  const [loading, cocktail] = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if(cocktail.lenght <1){
    return (
      <h2 className="section-title">Now Cocktails</h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">COCKTAILS</h2>
      <div className="cocktails-center">
        {cocktail.map((item) => (
          <Cocktail key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default CocktileList;
