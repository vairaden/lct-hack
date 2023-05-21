"use client";
import { useState } from "react";

import { MyCalendar } from "@/shared/ui/calendar";
import { TaskList } from "@/widgets/task-list";

export default function HomePage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <main>
        <h2>Задания</h2>
        <TaskList />
      </main>
      <aside>
        {/* @ts-ignore: No overload matches this call */}
        <MyCalendar onChange={setSelectedDate} value={selectedDate} />
        <div>
          <h2>Ближайшие события</h2>
        </div>
      </aside>
    </div>
  );
}
