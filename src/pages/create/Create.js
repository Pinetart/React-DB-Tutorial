import "./Create.css";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime);
    setTitle("");
    setMethod("");
    setCookingTime(0);
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            value={title}
            required
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Recipe method:</span>
          <textarea
            value={method}
            required
            onChange={(e) => {
              setMethod(e.target.value);
            }}
          />
        </label>
        <label>
          <span>Cooking time (minutes)</span>
          <input
            value={cookingTime}
            required
            type="number"
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
