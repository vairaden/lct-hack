import Calendar from "react-calendar";

import "./Calendar.scss";

export function MyCalendar({
  onChange,
  value,
}: {
  onChange: () => void;
  value: Date;
}) {
  return <Calendar onChange={onChange} value={value} />;
}
