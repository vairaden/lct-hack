"use client";

import { FormEvent, useState } from "react";
import styles from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormInput } from "@/shared/ui/form-input";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      email,
      password,
      stayLoggedIn,
    });
    router.push("/");
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <Image src="/logo.png" width={67} height={81} alt="Логотип" />
        <h1>Вход</h1>
      </header>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Checkbox
          checked={stayLoggedIn}
          onChange={(e) => setStayLoggedIn(e.target.checked)}
        >
          Остаться в системе
        </Checkbox>
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
}
