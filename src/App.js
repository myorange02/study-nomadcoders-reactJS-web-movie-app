import { useState } from "react";

function App() {
  const [counter, setConter] = useState(0);
  const onClick = () => setConter((prev) => prev +1);
  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App; 