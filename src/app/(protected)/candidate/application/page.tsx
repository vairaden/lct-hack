"use client";
import { FormInput } from "@/shared/ui/form-input";
import { Button } from "@/shared/ui/button";
import { FormEvent, useState } from "react";
import { MyDatePicker } from "@/shared/ui/datepicker";
import { useRouter } from "next/navigation";

import styles from "./ApplicationPage.module.scss";

export default function ApplicationPage() {
  const [course, setCourse] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [education, setEducation] = useState("");
  const [graduationDate, setGraduationDate] = useState<Date | null>(null);
  const [resume, setResume] = useState("");

  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    router.push("/candidate");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormInput
        type="text"
        onChange={(e) => setCourse(e.target.value)}
        value={course}
      >
        Направление стажировки
      </FormInput>
      <FormInput
        type="text"
        onChange={(e) => setCitizenship(e.target.value)}
        value={citizenship}
      >
        Гражданство
      </FormInput>
      <FormInput
        type="text"
        onChange={(e) => setEducation(e.target.value)}
        value={education}
      >
        Место обучения
      </FormInput>
      <MyDatePicker selected={graduationDate} onChange={setGraduationDate}>
        Дата выпуска
      </MyDatePicker>
      <FormInput
        type="text"
        onChange={(e) => setResume(e.target.value)}
        value={resume}
      >
        Ссылка на резюме
      </FormInput>
      <Button type="submit">Оставить заявку</Button>
    </form>
  );
}
