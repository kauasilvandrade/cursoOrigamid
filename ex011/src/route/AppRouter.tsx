import { Routes, Route } from "react-router";

import { Produtos } from ".././components/Produtos/index.tsx";
import { Layout } from ".././layout/Layout.tsx";
import { Contato } from ".././components/Contato/index.tsx";
import { Produto } from "../components/Produto/index.tsx";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
