import LoginForm from "@/features/login/LoginForm";
import LoginBanner from "./LoginBanner";
import SocialLogin from "../../features/social-login/SocialLogin";

import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <main className={styles.gridWrapper}>
      <LoginBanner className={styles.banner} />
      <LoginForm />
      <SocialLogin />
    </main>
  );
}
