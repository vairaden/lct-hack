"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "./CandidateHome.module.scss";
import { useApplicationDetails } from "@/shared/hooks";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { data, isLoading, error } = useApplicationDetails();

  return (
    <main>
      {isLoading ? (
        <h2>Загрузка</h2>
      ) : data ? (
        <>
          <h2>Статус заявки: {data.status}</h2>
          <ul>
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
