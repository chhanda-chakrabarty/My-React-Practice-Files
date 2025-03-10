// useEffect method basic implementation
import { useEffect, useState } from "react";
const UseEffectOne = () => {
  const [count = 5] = useState();
  useEffect(() => {
    console.log("Chhanda ");
  }, [count]);
  return <div>UseEffectOne</div>;
};

export default UseEffectOne;
