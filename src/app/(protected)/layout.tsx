"use client";

import { Header } from "@/widgets/header";
import { useUserStore } from "@/shared/store";
import { useRouter } from "next/navigation";

import styles from "./ProtectedLayout.module.scss";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  if (user) {
    return (
      <>
        <Header />
        <div className={styles.panelContainer}>
          <div className={styles.panel}>{children}</div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
