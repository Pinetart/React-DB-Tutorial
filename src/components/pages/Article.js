import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

const Article = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/articles/${id}`);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};

export default Article;
