import DatePicker from "react-datepicker";

import "./DatePicker.scss";

export function MyDatePicker({
  selected,
  onChange,
}: {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}) {
  return <DatePicker selected={selected} onChange={onChange} />;
}
