import { createContext, useState, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({
  authenticate: (token) => {},
  isAuthenticated: false,
  logout: () => {},
  token: "",
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = async (token) => {
    setAuthToken(token);

    await AsyncStorage.setItem("token", token);
  };

  const logout = async () => {
    setAuthToken(false);
    await AsyncStorage.removeItem("token");
  };

  const value = {
    authenticate,
    logout,
    isAuthenticated: !!authToken,
    token: authToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("Auth context was used outside auth provider");

  return context;
};
