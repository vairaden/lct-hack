import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FormInput } from "../form-input";
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  ({ value, onClick }: { value?: string; onClick?: () => void }, ref) => {
    return <FormInput value={value} ref={ref} onClick={onClick} />;
  }
);

export function MyDatePicker({
  selected,
  onChange,
}: {
  selected: Date | null;
  onChange: (date: Date | null) => void;
}) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      customInput={<CustomInput />}
    />
  );
}
