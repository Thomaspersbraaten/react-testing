import React from "react";
import Heading from "../layout/Heading";

// export default function About() {
//   return (
//     <>
//       <Heading title="About" />
//       <p>This is the about page</p>
//     </>
//   );
// }

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About me</h1>
        <p>lorem ipsum</p>
      </div>
    );
  }
}
