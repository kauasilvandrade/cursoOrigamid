import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Head } from "../Head";

export function Produto() {
  const [produto, setProduto] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto(url: string) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError("Um erro ocorreu!");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={`grid grid-cols-2 gap-8` + ` animeLeft`}>
      <Head
        title={`Raneki | ${produto.nome}`}
        description={`Raneki | Esse é um produto: ${produto.nome}`}
      />
      <div>
        {produto.fotos.map((foto: any) => (
          <img
            key={foto}
            src={foto.src}
            alt={foto.titulo}
            className="w-[350px] mb-8"
          />
        ))}
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h1>{produto.nome}</h1>
        <span className="p-2 bg-[#91fb5d] text-[#017e01] font-sans rounded-[4px]">
          {produto.preco}
        </span>
        <p className="font-sans text-xl/1.2">{produto.descricao}</p>
      </div>
    </section>
  );
}
