
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  isAdmin?: boolean;
  organizerEvents?: string[]; // Event IDs this user organizes
}

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  signout: () => void;
  loading: boolean;
  isAuthenticated: boolean;
  isOrganizer: (eventId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Mock user data - in a real app, this would come from a backend
const MOCK_USERS = [
  {
    id: "user-1",
    name: "Test User",
    email: "test@example.com",
    password: "password123",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=60&w=500",
    organizerEvents: ["1", "4"]
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for saved auth in localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const signin = async (email: string, password: string) => {
    setLoading(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = MOCK_USERS.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      setLoading(false);
      return true;
    }
    
    setLoading(false);
    return false;
  };

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if email already exists
    const existingUser = MOCK_USERS.find(u => u.email === email);
    
    if (existingUser) {
      setLoading(false);
      return false;
    }
    
    // In a real app, you would send this to your backend
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
      organizerEvents: []
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setLoading(false);
    return true;
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const isOrganizer = (eventId: string) => {
    if (!user || !user.organizerEvents) return false;
    return user.organizerEvents.includes(eventId);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        signin,
        signup,
        signout,
        loading,
        isAuthenticated: !!user,
        isOrganizer
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
