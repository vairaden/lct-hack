import { LoginForm } from "@/features/login";
import LoginBanner from "../../../shared/assets/LoginBanner";
import { SocialLogin } from "@/features/social-login";

import styles from "./LoginPage.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.loginSection}>
      <LoginForm />
      <SocialLogin />
    </div>
  );
}
