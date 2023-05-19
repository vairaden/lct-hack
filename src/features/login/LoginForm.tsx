"use client";

import { useState } from "react";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stayLoggedIn, setStayLoggedIn] = useState();

  return (
    <form className={styles.loginForm}>
      <label>
        <input />
      </label>
      <label>
        <input />
      </label>
      <label>
        <input type="checkbox" />
      </label>
      <button type="submit">Войти</button>
    </form>
  );
}
