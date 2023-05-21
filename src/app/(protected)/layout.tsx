import { Header } from "@/widgets/header";

import styles from "./ProtectedLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={styles.panel}>{children}</div>
    </>
  );
}
