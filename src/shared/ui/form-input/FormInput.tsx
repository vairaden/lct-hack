import React, { ChangeEvent, forwardRef } from "react";
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
      children,
    }: {
      type?: string;
      placeholder?: string;
      onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
      onClick?: () => void;
      value?: string;
      children?: React.ReactNode;
    },
    ref
  ) => {
    return (
      <label className={styles.inputLabel} onClick={onClick}>
        <div className={styles.labelText}>{children}</div>
        <input
          className={styles.formInput}
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
