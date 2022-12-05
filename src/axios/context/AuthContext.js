import { createContext, useState, React } from "react";
import useLocalStorage from "../login/useLocalStorage";
// import React from "react";
export const AuthContext = createContext([null, () => {}]);
export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  console.log(auth);
  return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
};

// import React from "react";
// import useLocalStorage from "../hooks/useLocalStorage";

// const AuthContext = React.createContext([null, () => {}]);

// export const AuthProvider = (props) => {
//   const [auth, setAuth] = useLocalStorage("auth", null);
//   return <AuthContext.Provider value={[auth, setAuth]}>{props.children}</AuthContext.Provider>;
// };

// export default AuthContext;
