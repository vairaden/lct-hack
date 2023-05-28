"use client";

import { VacancyList } from "@/widgets/vacancy-list";
import styles from "./ApplicationPage.module.scss";
import { FormInput } from "@/shared/ui/form-input";
import { useState } from "react";
import { useVacancyFilters, useVacancyList } from "@/shared/hooks";
import { RadioButton } from "@/shared/ui/radio-button";

export default function VacancyListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedOrganisation, setSelectedOrganisation] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const { data, isLoading } = useVacancyList(
    selectedCity,
    selectedOrganisation,
    selectedTag
  );
  const { data: filters, isLoading: filtersLoading } = useVacancyFilters();

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
          {filters?.city.map((city) => (
            <RadioButton
              value={city}
              checked={city === selectedCity}
              name="city"
              onChange={(e) => setSelectedCity(e.target.value)}
              key={city}
            >
              {city}
            </RadioButton>
          ))}
          <div className={styles.separator} />
          {filters?.organisations.map((organisation) => (
            <RadioButton
              value={organisation}
              checked={organisation === selectedOrganisation}
              name="organisation"
              onChange={(e) => setSelectedOrganisation(e.target.value)}
              key={organisation}
            >
              {organisation}
            </RadioButton>
          ))}
          <div className={styles.separator} />
          {filters?.tags.map((tag) => (
            <RadioButton
              value={tag}
              checked={tag === selectedTag}
              name="tag"
              onChange={(e) => setSelectedTag(e.target.value)}
              key={tag}
            >
              {tag}
            </RadioButton>
          ))}
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
