import { create } from "zustand";
import { User } from "@/shared/types";

import { devtools } from "zustand/middleware";

interface userState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<userState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    { name: "userStore" }
  )
);
