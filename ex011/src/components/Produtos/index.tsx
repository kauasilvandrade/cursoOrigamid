import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Head } from "../Head";

interface Produto {
  id: string;
  nome: string;
  fotos: { src: string; title: string }[];
}

export function Produtos() {
  const [produtos, setProdutos] = useState<Produto[] | null>(null);

  useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  return (
    <section className={`grid grid-cols-3 gap-4` + ` animeLeft`}>
      <Head title={`Raneki`} description={`Descrição do site Raneki`} />
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img
            src={produto.fotos[0].src}
            alt=""
            className="w-[350px] h-[350px] object-cover"
          />
          <h1 className="mx-2 my-0">{produto.nome}</h1>
        </Link>
      ))}
    </section>
  );
}
