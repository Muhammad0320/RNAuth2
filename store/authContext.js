import { createContext } from "react";

const AuthContext = createContext({
  authenticate: (token) => {},
  isAuthenticated: false,
  logout: () => {},
  token,
});
