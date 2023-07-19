'use client'
import { useState } from "react";
import Btn from "./btn";


export default function Counter() {
  const [counter, setCounter] = useState(0);
  const clickHandler = () => {
    setCounter((counter) => counter + 1);
  };
  const resetHandler = () => {
    setCounter(0);
  };
  return (
    <div>
      <h1>Counter {counter}</h1>
      <Btn title="count up" handler={clickHandler} />
      <Btn title="reset" handler={resetHandler} />
    </div>
  );
}