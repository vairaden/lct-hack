import { VacancyList } from "@/widgets/vacancy-list";

import styles from "./ApplicationsPage.module.scss";
import { Checkbox } from "../../../shared/ui/checkbox";

export default function ApplicationsPage() {
  return (
    <>
      <div className={styles.heading}>
        <h1>Информация о стажировках</h1>
        <input />
      </div>
      <div className={styles.separator} />
      <main className={styles.mainSection}>
        <div>
          <h2>Фильтры</h2>
          <Checkbox>Параметр</Checkbox>
          <Checkbox>Параметр</Checkbox>
          <Checkbox>Параметр</Checkbox>
          <Checkbox>Параметр</Checkbox>
        </div>
        <VacancyList />
      </main>
    </>
  );
}
