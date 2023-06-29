import { useState } from "react";

export function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        alignItems: "baseline",
      }}
    >
      <div>{name}</div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

// function useLocalStorage(key, defaultValue) {}
