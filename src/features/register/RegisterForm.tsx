"use client";

import { FormInput } from "@/shared/ui/form-input";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import Image from "next/image";

import styles from "./RegisterForm.module.scss";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { MyDatePicker } from "@/shared/ui/datepicker";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState<Date | null>(new Date());
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <div className={styles.formWrapper}>
      <header>
        <Image src="/logo.png" width={67} height={81} alt="Логотип" />
        <h1>Регистрация</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormInput
          type="text"
          placeholder="ФИО"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <MyDatePicker
          selected={birthday}
          onChange={(date) => setBirthday(date)}
        />
        <p>Пол</p>
        <div>
          <Checkbox>Женский</Checkbox>
          <Checkbox>Мужской</Checkbox>
        </div>
        <FormInput
          type="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormInput
          type="password"
          placeholder="Повторите пароль"
          onChange={(e) => setRepeatedPassword(e.target.value)}
          value={repeatedPassword}
        />
        <Checkbox>
          <span style={{ fontSize: "10px" }}>
            Я Принимаю соглашение N-241- ПП «О стажировках молодых граждан» и
            Соглашение на обработку персональных данных
          </span>
        </Checkbox>
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
}
