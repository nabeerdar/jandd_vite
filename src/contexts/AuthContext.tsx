import React, { createContext, useState, useCallback, ReactNode } from "react";

// Define the shape of the AuthContext
interface AuthContextProps {
  isLoggedIn: boolean;
  role: string | null; // Track roles like "admin", "user", or null for unauthenticated
  login: (token: string, role: string) => void;
  logout: () => void;
}

// Define the provider's props
interface AuthProviderProps {
  children: ReactNode;
}

// Create the AuthContext
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => !!sessionStorage.getItem("authToken"));
  const [role, setRole] = useState<string | null>(() => sessionStorage.getItem("role") || null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  console.log("isLoggedIn:", isLoggedIn)
  // Logout function to clear session data
  const logout = useCallback(() => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("role");
    setIsLoggedIn(false);
    setRole(null);
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  // Function to reset inactivity timer
  const resetLogoutTimer = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);

    const timeoutDuration = role === "admin" ? 1800000 : 600000; // 30 mins for admin, 10 mins for user
    const newTimeoutId = setTimeout(() => {
      console.log("Session expired, logging out.");
      logout();
    }, timeoutDuration);

    setTimeoutId(newTimeoutId);
  }, [logout, timeoutId, role]);

  // Login function to store token and role
  const login = (token: string, userRole: string) => {
    sessionStorage.setItem("authToken", token);
    console.log( "userRole:", userRole);
    sessionStorage.setItem("role", userRole);
    setIsLoggedIn(true);
    setRole(userRole);
    resetLogoutTimer();
  };


  return (
    <AuthContext.Provider value={{ isLoggedIn, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
