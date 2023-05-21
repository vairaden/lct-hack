export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {/* <div className={styles.gridWrapper}>
        <LoginBanner className={styles.banner} />
        <LoginForm className={styles.loginForm} />
        <SocialLogin />
      </div> */}
      {children}
    </main>
  );
}
