import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../../Hooks/Context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchVlaue = useRef("");

  useEffect(() => {
    searchVlaue.current.focus();
  }, []);

  const searchCocktail = (e) => {
    setSearchTerm(searchVlaue.current.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefalut()
  }

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchVlaue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
