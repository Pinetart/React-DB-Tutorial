import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import { useState } from "react";

import "./Search.css";

const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = `http://localhost:8000/recipes?q=${query}`;
  const { error, isPending, data: recipes } = useFetch(url);

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes.length !== 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <p className="novalue">No Results</p>
      )}
    </div>
  );
};

export default Search;
