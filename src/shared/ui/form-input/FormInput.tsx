import { ChangeEvent, forwardRef } from "react";
import styles from "./FormInput.module.scss";

// eslint-disable-next-line react/display-name
export const FormInput = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      onClick,
      value,
    }: {
      type?: string;
      placeholder?: string;
      onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
      onClick?: () => void;
      value?: string;
    },
    ref
  ) => {
    return (
      <label className={styles.formInput} onClick={onClick}>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          // @ts-ignore: Ref type
          ref={ref}
        />
      </label>
    );
  }
);
