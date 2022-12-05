import { createContext, useState, React } from "react";

// import React from "react";
export const AuthContext = createContext([null, () => {}]);
export const AuthProvider = (props) => {
  console.log(props);
  const [auth, setAuth] = useState(null);
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
