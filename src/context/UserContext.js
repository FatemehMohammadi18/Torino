"use client";
import getProfile from "@/services/userProfile";
import { getCookie } from "@/utils/cookie";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = getCookie("accessToken");
    if (token) {
      getProfile().then((userData) => {
        if (userData) setUser(userData);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
