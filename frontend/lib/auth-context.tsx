"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export interface User {
  id: string;
  name: string;
  email: string;
  plan: string;
  avatar: string;
  generationsUsed: number;
  generationsTotal: number;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<boolean>;
  signup: (name: string, email: string, password?: string) => Promise<boolean>;
  demoLogin: () => void;
  logout: () => void;
}

export const DEFAULT_USER: User = {
  id: "user-orhan-1",
  name: "Orhan Bey",
  email: "orhan@genas.ai",
  plan: "Free",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  generationsUsed: 2,
  generationsTotal: 5,
};

const AuthContext = createContext<AuthContextType>({
  user: DEFAULT_USER,
  isLoading: false,
  login: async () => true,
  signup: async () => true,
  demoLogin: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(DEFAULT_USER);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("genas_user");
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        setUser(DEFAULT_USER);
        localStorage.setItem("genas_user", JSON.stringify(DEFAULT_USER));
      }
    } catch {
      setUser(DEFAULT_USER);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const loggedUser: User = {
      ...DEFAULT_USER,
      email,
      name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Orhan Bey",
    };
    setUser(loggedUser);
    localStorage.setItem("genas_user", JSON.stringify(loggedUser));
    setIsLoading(false);
    router.push("/dashboard");
    return true;
  };

  const signup = async (name: string, email: string) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 400));
    const newUser: User = {
      ...DEFAULT_USER,
      name: name || "Orhan Bey",
      email,
    };
    setUser(newUser);
    localStorage.setItem("genas_user", JSON.stringify(newUser));
    setIsLoading(false);
    router.push("/dashboard");
    return true;
  };

  const demoLogin = () => {
    setUser(DEFAULT_USER);
    localStorage.setItem("genas_user", JSON.stringify(DEFAULT_USER));
    router.push("/dashboard");
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("genas_user");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signup, demoLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
