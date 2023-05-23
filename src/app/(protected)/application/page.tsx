"use client";
import { VacancyList } from "@/widgets/vacancy-list";

import styles from "./ApplicationPage.module.scss";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormInput } from "@/shared/ui/form-input";
import { useState } from "react";

export default function ApplicationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className={styles.heading}>
        <h1>Информация о стажировках</h1>
        <FormInput
          type="text"
          placeholder="Поиск"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className={styles.separator} />
      <main className={styles.mainSection}>
        <div>
          <h2>Фильтры</h2>
          <Checkbox>Параметр</Checkbox>
          <div className={styles.separator} />
          <Checkbox>Параметр</Checkbox>
          <Checkbox>Параметр</Checkbox>
          <div className={styles.separator} />
          <Checkbox>Параметр</Checkbox>
        </div>
        <VacancyList />
      </main>
    </>
  );
}
