import LoginBanner from "../../shared/assets/LoginBanner";

import styles from "./AuthLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className={styles.flexWrapper}>
        <LoginBanner className={styles.banner} />
        {children}
      </div>
    </main>
  );
}
