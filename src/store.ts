import { create } from "zustand";

interface UserStore {
  user: { id: number; username: string; role: string } | null;
  setUser: (user: UserStore["user"]) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
