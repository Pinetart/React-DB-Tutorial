import { React, useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
    SetEmail("");
    SetPassword("");
  }

  return (
    <form className={styles["login-form"]} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => {
            SetEmail(e.target.value);
          }}
          value={email}
        ></input>
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          onChange={(e) => {
            SetPassword(e.target.value);
          }}
          value={password}
        ></input>
      </label>
      <button className="btn">Login</button>
    </form>
  );
}
