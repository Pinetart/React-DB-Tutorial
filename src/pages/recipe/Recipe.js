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
    <div>
      {isPending && <p className="p">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {recipe && (
        <div>
          <h1>{recipe.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Recipe;
