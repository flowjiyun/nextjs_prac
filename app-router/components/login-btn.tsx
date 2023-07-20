'use client'

import { useState } from "react";
import Btn from "./btn";

export default function LoginBtn() {
  const [data, setData] = useState<JSON | null>(null);

  const submitHandler = async () => {
    const res = await fetch('/login/api');
    const jsonData = await res.json();
    setData(jsonData);
  };

  return (
    <>
      {data && <p>data from server: {JSON.stringify(data)}</p>}
      <Btn title='submit' handler={submitHandler}/>
    </>
  );
}
