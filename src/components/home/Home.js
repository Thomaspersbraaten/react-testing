import React from "react";
import Heading from "../layout/Heading";
import defaultImage from "./example.png";

// export default function Home() {
//   return <Heading title="Home" />;
// }
class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <img src={defaultImage} alt="kekw" />
      </div>
    );
  }
}

export default Home;
