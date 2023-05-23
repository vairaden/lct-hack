import { ChangeEvent } from "react";
import styles from "./Checkbox.module.scss";

export function Checkbox({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <div className={styles.customCheckbox} />
      {children}
    </label>
  );
}
