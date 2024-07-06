import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../Components/Loader/Loading";

function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktails] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.data;
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktails = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktails(newCocktails);
        } else {
          setCocktails(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCocktail();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt="" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((item, index) =>
              item ? <span key={index}>{item}</span> : null
            )}
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}

export default SingleCocktail;
