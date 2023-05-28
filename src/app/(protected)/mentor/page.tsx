"use client";

import { useUserStore } from "@/shared/store";

export default function MentorHomePage() {
  const user = useUserStore((state) => state.user);

  return <>Наставник</>;
}
