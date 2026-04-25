import { useState } from "react";
import { Produto } from "./components/Produto";

export function App() {
  const [ativar, setAtivar] = useState(false);
  return (
    <div>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
}
