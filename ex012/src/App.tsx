import { lazy, Suspense, useState } from "react";

const Contato = lazy(() => import("./Contato"));

export function App() {
  const [ativo, setAtivo] = useState(false);
  return (
    <div>
      {ativo && (
        <Suspense fallback={<div>Carregando...</div>}>
          <Contato />
        </Suspense>
      )}
      <button onClick={() => setAtivo(true)}>Ativar</button>
    </div>
  );
}
