"use client";
import Calendar from "react-calendar";
import styles from "./HomePage.module.scss";
import { useState } from "react";

import "@/shared/styles/Calendar.scss";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <main>
      {/* @ts-ignore: No overload matches this call */}
      <Calendar onChange={setSelectedDate} value={selectedDate} />
    </main>
  );
}
