import { create } from "zustand";

interface AuthState {
  token: string | null;
  panelUser: any | null;

  setAuth: (token: string, panelUser: any) => Promise<void>;
  hydrate: () => Promise<void>;
  logout: () => Promise<void>;
}

export const userAuth = create<AuthState>((set) => ({
  token: null,
  panelUser: null,

  setAuth: async (token, panelUser) => {
    await localStorage.setItem("token", token);
    await localStorage.setItem("panelUser", JSON.stringify(panelUser));

    set({ token, panelUser });
  },

  hydrate: async () => {
    const token = await localStorage.getItem("token");
    const panelUser = await localStorage.getItem("panelUser");

    set({ token, panelUser: panelUser ? JSON.parse(panelUser) : null });
  },

  logout: async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("panelUser");

    set({ token: null, panelUser: null });
  },
}));
