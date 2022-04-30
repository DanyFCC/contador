import { useEffect, useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(100);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const reset = () => {
    setCount(100);
  };

  useEffect(() => {
    console.log(`El contador va en ${count}`);
  }, [count]);

  return (
    <div>
      <center>
        <h1>{count}</h1>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={reset}>reset</button>
      </center>
    </div>
  );
};

export default Contador;
