import { createContext, useContext, useState, ReactNode } from 'react';
import { User, UserRole } from '../interfaces/User';

interface AuthContextType {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setUser({
        id: '1',
        username: 'admin',
        role: 'ADMIN',
        firstName: 'Admin',
        lastName: 'User',
        email: 'admin@example.com',
      });
    } else if (username === 'student' && password === 'student') {
      setUser({
        id: '2',
        username: 'student',
        role: 'STUDENT',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        roomNumber: 'A-101',
        admissionDate: new Date('2023-09-01'),
        feeStatus: 'PAID',
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'ADMIN',
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 