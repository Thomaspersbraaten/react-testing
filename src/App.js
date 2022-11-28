import Kekw from "./components/modalandbutton/KekModal.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Hooks from "./components/Hooks";
// import DefaultProfilePic from "./components/DefaultProfilePic";
import Layout from "./components/layout/Layout";
// import ProfileName from "./components/ProfileName";
// import defaultImage from "../src/images/example.png";

function App() {
  return (
    <>
      <Kekw />
      {/* <Hooks />
      <Layout checked="true" times="0" /> */}

      {/* <ProfileName name="John connor" />
      <DefaultProfilePic alt="A Siluette of a person" /> */}
    </>
  );
}

export default App;
