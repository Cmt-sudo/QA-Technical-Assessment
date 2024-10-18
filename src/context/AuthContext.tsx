// src/AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase';

// Define the context type for Auth
interface AuthContextType {
  currentUser: User | null;
}

// Create AuthContext with default value of null
const AuthContext = createContext<AuthContextType | null>(null);

// Use the Auth context
export function useAuth() {
  return useContext(AuthContext);
}

// AuthProvider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup the listener on unmount
    return unsubscribe;
  }, []);

  const value = { currentUser };

  // Only show children when not loading
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
