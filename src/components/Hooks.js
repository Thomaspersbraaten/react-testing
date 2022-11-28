import React from "react";
import { useState } from "react";

export default function Hooks() {
  const [age, setAge] = useState(2);
  const [number, setNumber] = useState(44);

  //   function brokenIncrement() {
  //     setAge(age + 1);
  //     setAge(age + 1);
  //   }
  //   function increment() {
  //     setAge((age) => age + 1);
  //     setAge((age) => age + 1);
  //   }
  function update() {
    setAge(age + 1);
    setNumber(number + Math.random() * 999);
  }
  return (
    <div>
      <div>
        {age} and
        {number}
      </div>
      {/* <button onClick={brokenIncrement}>Broken increment</button> */}
      {/* <button onClick={increment}>Increment</button> */}
      <button onClick={update}>Increment</button>
    </div>
  );
}
