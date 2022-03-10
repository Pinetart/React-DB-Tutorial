import { useFetch } from "../hooks/useFetch";
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
          </div>
        ))}
    </div>
  );
};

export default Home;
