import { use, useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
  const [price, setPrice] = useState([100, 200, 300, 400]);
  return (
    <>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Counter
      </button>

      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Increase Number
      </button>

      <button onClick={() => setPrice([...price, 500])}>Increase Price</button>

      <Child number={number} price={price} />

    </>
  );
}

export default App;
