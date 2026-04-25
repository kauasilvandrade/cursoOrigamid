import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action) {
    case "aumentar":
      return state + 1;
    case "diminuir":
      return state - 1;
    default:
      throw new Error();
  }
}

export function App() {
  const [state, dispath] = useReducer(reducer, 0);

  return (
    <div>
      <br />
      <button onClick={() => dispath("aumentar")}>+</button>
      <br />
      <button onClick={() => dispath("diminuir")}>-</button>
      <p>{state}</p>
    </div>
  );
}
