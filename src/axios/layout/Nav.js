// import { useContext } from "react";
// import { Button } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

// function Nav() {
//   const [auth, setAuth] = useContext(AuthContext);

//   const navigate = useNavigate();

//   function logout() {
//     setAuth(null);
//     navigate("/");
//   }
//   console.log(auth);
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       {auth ? (
//         <>
//           <Link to="/dashboard">Dashboard</Link> | <Button onclick={logout}>Log out</Button>
//         </>
//       ) : (
//         <Link to="/login">Login</Link>
//       )}
//     </nav>
//   );
// }

import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
function Nav() {
  const [auth, setAuth] = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    setAuth(null);
    navigate("/");
  }

  return (
    <nav>
      <Link to="/">Home</Link>
      {auth ? (
        <>
          | <Link to="/dashboard">Dashboard</Link> | <button onClick={logout}>Log out</button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Nav;
