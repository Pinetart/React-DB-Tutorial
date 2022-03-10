import "./Recipe.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const Recipe = () => {
  const { id } = useParams();

  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/recipes/${id}`);
  return (
    <div className="recipe">
      {isPending && <p className="pending">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to make.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};

export default Recipe;
