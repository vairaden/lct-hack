import styles from "./Chip.module.scss";

export function Chip({ children }: { children: React.ReactNode }) {
  return <div className={styles.chip}>{children}</div>;
}
