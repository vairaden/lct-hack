"use client";

import { Header } from "@/widgets/header";
import { useUserStore } from "@/shared/store";
import { useRouter } from "next/navigation";

import styles from "./ProtectedLayout.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  if (!user) {
    router.push("/login");
  }

  if (user) {
    return (
      <>
        <Header />
        <div className={styles.panel}>{children}</div>
      </>
    );
  } else {
    return <></>;
  }
}
