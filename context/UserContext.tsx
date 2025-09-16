import React, { createContext, useContext, useState, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserData {
  success: boolean;
  message: string;
  data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

interface UserContextType {
  userData: UserData | null;
  setUserData: (data: UserData | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      await AsyncStorage.removeItem('userData');
      setUserData(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const value: UserContextType = {
    userData,
    setUserData,
    isLoggedIn,
    setIsLoggedIn,
    logout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};