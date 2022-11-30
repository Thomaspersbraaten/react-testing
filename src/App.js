import Kekw from "./components/modalandbutton/KekModal.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Hooks from "./components/Hooks";
// import DefaultProfilePic from "./components/DefaultProfilePic";
import Layout from "./components/layout/Layout";
import First from "./components/First.js";
import Booklist from "./components/books/Booklist.js";
import GameList from "./components/games/GameList.js";
// import ProfileName from "./components/ProfileName";
import NewGameList from "./components/games/NewGameList.js";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import GameItem from "./components/games/GameItem.js";
import GameDetail from "./components/games/GameDetail.js";
import SimpleExample from "./components/contact/form/SimpleExample.js";
import YupForm from "./components/contact/form/YupForm.js";
// import defaultImage from "../src/images/example.png";

function App() {
  return (
    <>
      {/* <GameList /> */}
      {/* <Router>
        <Routes>
          <Route path="/" element={<NewGameList />}></Route>
          <Route path="game/:slug" element={<GameDetail />}></Route>
        </Routes>
      </Router> */}
      {/* <SimpleExample></SimpleExample> */}
      <YupForm />

      {/* <Layout /> */}
    </>
  );
}

export default App;
