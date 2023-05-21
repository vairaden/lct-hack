import { TaskCard } from "@/entities/task";

export function TaskList() {
  return (
    <ul>
      <li>
        <TaskCard />
      </li>
      <li>
        <TaskCard />
      </li>
      <li>
        <TaskCard />
      </li>
    </ul>
  );
}
