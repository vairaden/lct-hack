import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { FormInput } from "../form-input";
import { ChangeEvent, forwardRef } from "react";

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef(
  (
    {
      value,
      onClick,
      placeholder,
      children,
    }: {
      value?: string;
      onClick?: () => void;
      placeholder?: string;
      children?: React.ReactNode;
    },
    ref
  ) => {
    return (
      <FormInput
        value={value}
        ref={ref}
        onClick={onClick}
        placeholder={placeholder}
      >
        {children}
      </FormInput>
    );
  }
);

export function MyDatePicker({
  selected,
  onChange,
  placeholder,
  children,
}: {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  children?: React.ReactNode;
}) {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      customInput={
        <CustomInput placeholder={placeholder}>{children}</CustomInput>
      }
    />
  );
}
