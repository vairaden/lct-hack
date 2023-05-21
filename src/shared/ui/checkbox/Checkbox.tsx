import styles from "./Checkbox.module.scss";

export function Checkbox({ children }: { children: React.ReactNode }) {
  return (
    <label className={styles.checkboxLabel}>
      <input type="checkbox" />
      <div className={styles.customCheckbox} />
      {children}
    </label>
  );
}
