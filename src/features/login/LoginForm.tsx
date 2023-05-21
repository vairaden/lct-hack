"use client";

import { useState } from "react";
import styles from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormInput } from "@/shared/ui/form-input";
import Image from "next/image";

export function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stayLoggedIn, setStayLoggedIn] = useState();

  return (
    <div className={styles.wrapper}>
      <header>
        <Image src="/logo.png" width={67} height={81} alt="Логотип" />
        <h1>Вход</h1>
      </header>
      <form className={styles.loginForm}>
        <FormInput />
        <FormInput />
        <Checkbox>Остаться в системе</Checkbox>
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
}
