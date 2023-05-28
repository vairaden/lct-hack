"use client";
import { useState } from "react";
import Link from "next/link";

import styles from "./CandidateHome.module.scss";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <main>
      <Link href="/candidate/application">Самое время заполнить заявку</Link>
    </main>
  );
}
