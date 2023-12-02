import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  authenticate: (token) => {},
  isAuthenticated: false,
  logout: () => {},
  token: "",
});

export const AuthContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(false);
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
