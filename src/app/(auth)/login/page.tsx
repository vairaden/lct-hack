import { LoginForm } from "@/features/login";
import LoginBanner from "./LoginBanner";
import { SocialLogin } from "@/features/social-login";

import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.gridWrapper}>
      <LoginBanner className={styles.banner} />
      <LoginForm className={styles.loginForm} />
      <SocialLogin />
    </div>
  );
}
