import { ChangeEvent } from "react";
import styles from "./FormInput.module.scss";

export function FormInput({
  type,
  placeholder,
  onChange,
  value,
}: {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <label className={styles.formInput}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
