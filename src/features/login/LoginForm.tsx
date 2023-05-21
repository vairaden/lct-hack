"use client";

import { useState } from "react";
import styles from "./LoginForm.module.scss";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormInput } from "../../shared/ui/form-input";

export function LoginForm({ className }: { className: string }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [stayLoggedIn, setStayLoggedIn] = useState();

  return (
    <div className={className}>
      <form className={styles.loginForm}>
        <FormInput />
        <Checkbox>Остаться в системе</Checkbox>
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
}
