import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:8000/articles");
  return (
    <div className="home">
      <h2>Homepage</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>Loading...</div>}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h3>{article.title}</h3>
            <p>{article.author}</p>
            <Link to={`articles/${article.id}`}>Read more</Link>
          </div>
        ))}
    </div>
  );
};

export default Home;
