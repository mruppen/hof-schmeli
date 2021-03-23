// @ts-ignore
import { useState } from "react";

export function Compat() {
  const [v, set] = useState(0);
  return (
    <div>
      <p>Counter: {v}</p>
      <button onClick={() => set(v + 1)}>Increment</button>
    </div>
  );
}
