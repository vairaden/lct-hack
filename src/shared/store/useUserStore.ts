import { create } from "zustand";
import { User } from "@/shared/types";

interface userState {
  // user: User | null;
  user: { role: "candidate" | "mentor" | "hr" } | null;
  // setUser: (user: User) => void;
  setUser: (user: { role: "candidate" | "mentor" | "hr" }) => void;
}

export const useUserStore = create<userState>()((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
