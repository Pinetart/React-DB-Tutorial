import "./Home.css";
import { useFetch } from "../../hooks/useFetch";

const Home = () => {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:8000/recipes");

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {recipes &&
        recipes.map((recipe) => (
          <div>
            <h2 key={recipe.id}>{recipe.title}</h2>
          </div>
        ))}
    </div>
  );
};

export default Home;
