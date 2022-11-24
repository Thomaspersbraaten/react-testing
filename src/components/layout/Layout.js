import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import React from "react";
import Portfolio from "../portfolio/Portfolio";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { times: 0 };
  }
  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ times: 1 });
    }, 1000);
  }
  render() {
    return (
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <NavLink to="/">
            <Navbar.Brand>React App</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
              <NavLink to="/portfolio" className="nav-link">
                Portfolio
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
        </Container>
      </Router>
    );
  }
}

export default Layout;
// export default function Layout() {
//   return (
//     <Router>
//       <Navbar bg="dark" variant="dark" expand="lg">
//         <NavLink to="/">
//           <Navbar.Brand>React App</Navbar.Brand>
//         </NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <NavLink to="/" className="nav-link">
//               Home
//             </NavLink>
//             <NavLink to="/about" className="nav-link">
//               About
//             </NavLink>
//             <NavLink to="/contact" className="nav-link">
//               Contact
//             </NavLink>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Container>
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/contact" element={<Contact />}></Route>
//         </Routes>
//       </Container>
//     </Router>
//   );
// }
