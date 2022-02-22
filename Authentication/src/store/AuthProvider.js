import { useState } from "react";
import AuthContext from "./AuthContext";

const calculateRemainingTime = (expTime) => {
  const currTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime;
  const remTime = adjExpTime - currTime;
  return remTime;
};

const getStoreToken = () => {
  const initialToken = localStorage.getItem("token");
  const expTime = localStorage.getItem("expTime");
  const remTime = calculateRemainingTime(expTime);

  if (remTime <= 3600) {
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
    return { token: null, duration: null };
  } else {
    return { token: initialToken, duration: remTime };
  }
};

const AuthProvider = (props) => {
  const initialToken = getStoreToken().token;

  const [token, setToken] = useState(initialToken);
  const isLogged = !!token;

  const loginHandler = (token, expTime) => {
    localStorage.setItem("token", token);
    localStorage.setItem("expTime", expTime);
    setToken(token);

    const remTime = calculateRemainingTime(expTime);
    setTimeout(logoutHandler, remTime);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expTime");
  };
  const context = {
    token: token,
    isLogged: isLogged,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
