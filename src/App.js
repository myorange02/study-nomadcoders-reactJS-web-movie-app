import { useState, useEffect } from "react";

function App() {
  const [counter, setConter] = useState(0);
  const onClick = () => setConter((prev) => prev +1);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App; 