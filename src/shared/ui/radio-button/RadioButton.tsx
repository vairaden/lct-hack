import { ChangeEvent } from "react";
import styles from "./RadioButton.module.scss";

export function RadioButton({
  children,
  name,
  value,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  name: string;
  value: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={styles.radioLabel}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.customRadio} />
      {children}
    </label>
  );
}
