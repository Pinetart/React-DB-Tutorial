import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Article = () => {
  const { id } = useParams();
  const {
    data: article,
    isPending,
    error,
  } = useFetch(`http://localhost:8000/articles/${id}`);

  console.log(id);
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
