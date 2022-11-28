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
// import defaultImage from "../src/images/example.png";

function App() {
  return (
    <>
      {/* <GameList /> */}
      <NewGameList />
    </>
  );
}

export default App;
