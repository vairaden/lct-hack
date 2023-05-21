import { VacancyList } from "@/widgets/vacancy-list";

import styles from "./ApplicationsPage.module.scss";

export default function ApplicationsPage() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Информация о стажировках</h1>
        <input />
      </div>
      <div className={styles.separator} />
      <main className={styles.mainSection}>
        <div className={styles.filters}>
          <h2>Фильтры</h2>
          <label>
            <input type="checkbox" />
            <div className={styles.customCheckbox} />
            Параметр
          </label>
        </div>
        <VacancyList />
      </main>
    </>
  );
}
