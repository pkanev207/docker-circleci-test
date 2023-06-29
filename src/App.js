import { useState } from "react";
import { Counter } from "./components/Counter/Counter.jsx";

function App() {
  const [isKyle, setIsKyle] = useState(true);

  return (
    <div style={{ margin: "20px" }}>
      {isKyle ? (
        <Counter name="Kyle" key="Kyle" />
      ) : (
        <Counter name="Sally" key="Sally" />
      )}
      <br />
      <button onClick={() => setIsKyle((k) => !k)}>Swap</button>
    </div>
  );
}

export default App;
