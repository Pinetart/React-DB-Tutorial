import "./Create.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cookingTime, setCookingTime] = useState(0);
  const ingredientInput = useRef(null);

  const history = useHistory();

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const recipe = { title, method, cookingTime, ingredients };

    fetch(`http://localhost:8000/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    }).then(() => {
      setIsLoading(false);
      history.push("/");
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    }
    setNewIngredient("");
    ingredientInput.current.focus();
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
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              ref={ingredientInput}
              value={newIngredient}
              type="text"
              onChange={(e) => {
                setNewIngredient(e.target.value);
              }}
            />
            <button className="btn" onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((ing) => (
            <em key={ing}>{ing}</em>
          ))}
        </p>
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
        {!isLoading && <button type="submit">Submit</button>}
        {isLoading && (
          <button style={{ pointerEvents: "none", width: "auto" }}>
            Submitting
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
