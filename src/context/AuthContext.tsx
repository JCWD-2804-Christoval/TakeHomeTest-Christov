import React, { createContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
  children?: ReactNode; // Added this line to fix 'children' issues
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (user: string) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

