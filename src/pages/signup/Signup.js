import { React, useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { error, isPending, signup } = useSignup();

  function handleSubmit(e) {
    e.preventDefault();
    signup(email, password, displayName);
    setEmail("");
    setPassword("");
    setDisplayName("");
  }

  return (
    <form className={styles["signup-form"]} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        ></input>
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        ></input>
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          onChange={(e) => {
            setDisplayName(e.target.value);
          }}
          value={displayName}
        ></input>
      </label>
      {!isPending && <button className="btn">Signup</button>}
      {error && <p>{error}</p>}
      {isPending && (
        <button className="btn" disabled>
          Loading
        </button>
      )}
    </form>
  );
}
