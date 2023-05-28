"use client";

import { VacancyList } from "@/widgets/vacancy-list";
import styles from "./ApplicationPage.module.scss";
import { Checkbox } from "@/shared/ui/checkbox";
import { FormInput } from "@/shared/ui/form-input";
import { useState } from "react";
import { useVacancyList } from "@/shared/hooks";

export default function VacancyListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, error } = useVacancyList();

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
          <Checkbox checked={false} onChange={() => {}}>
            Параметр
          </Checkbox>
          <div className={styles.separator} />
          <Checkbox checked={false} onChange={() => {}}>
            Параметр
          </Checkbox>
          <Checkbox checked={false} onChange={() => {}}>
            Параметр
          </Checkbox>
          <div className={styles.separator} />
          <Checkbox checked={false} onChange={() => {}}>
            Параметр
          </Checkbox>
        </div>
        <div className={styles.listContainer}>
          {isLoading ? (
            <h2>Загрузка...</h2>
          ) : data ? (
            <VacancyList data={data} />
          ) : (
            <h2>Отсутствуют активные вакансии</h2>
          )}
        </div>
      </main>
    </>
  );
}
