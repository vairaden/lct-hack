"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "./CandidateHome.module.scss";
import { useApplicationDetails } from "@/shared/hooks";
import ProgressBar from "@ramonak/react-progress-bar";

const applicationProgress = {
  unverified: {
    text: "Не проверена",
    value: 30,
  },
  verified: {
    text: "Проверена",
    value: 70,
  },
  approved: {
    text: "Подтверждена",
    value: 100,
  },
  declined: {
    text: "Отклонена",
    value: 90,
  },
};
export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data, isLoading, error } = useApplicationDetails();

  return (
    <main>
      {isLoading ? (
        <h2>Загрузка</h2>
      ) : data ? (
        <>
          <h2>Статус заявки:</h2>
          <ProgressBar
            completed={applicationProgress[data.status].value}
            customLabel={applicationProgress[data.status].text}
          />
          <ul className={styles.list}>
            <li>
              <Link href="/candidate">Портал тестирования</Link>
            </li>
            <li>
              <Link href="/candidate/vacancies">Заявки на стажировку</Link>
            </li>
          </ul>
        </>
      ) : (
        <Link href="/candidate/application">Самое время заполнить заявку</Link>
      )}
    </main>
  );
}
