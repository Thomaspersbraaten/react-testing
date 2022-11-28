import { useState, useEffect } from "react";

function First() {
  const [greeting, setGreeting] = useState("Hello");

  useEffect(
    // this is the "effect", the function to run on each render
    function () {
      console.log("useEffect called on render");
      setGreeting("Goodbye"); // updating the greeting variable will cause a re-render

      // this is the "clean up" function
      // it's run before re-render and when the component is unmounted
      return function () {
        console.log("useEffect called when cleaning up");
      };
    },
    [greeting] // this is the list of variables the effect should respond to
  );

  return <div className="App">First component: {greeting}</div>;
}

export default First;
