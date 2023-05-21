"use client";
import { useState } from "react";

import { MyCalendar } from "@/shared/ui/calendar";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <main>
      {/* @ts-ignore: No overload matches this call */}
      <MyCalendar onChange={setSelectedDate} value={selectedDate} />
    </main>
  );
}
