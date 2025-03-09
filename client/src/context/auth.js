import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

// ✅ Create Auth Context
const AuthContext = createContext();

// ✅ Custom Hook
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  console.log("✅ AuthProvider props:", children); // Debugging Log

  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({ user: parseData.user, token: parseData.token });
    }
  }, []);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Correct Exports
export { useAuth, AuthProvider };
export default AuthProvider;
