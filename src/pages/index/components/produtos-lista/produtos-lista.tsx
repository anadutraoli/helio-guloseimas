import { useEffect, useState } from "react";
import "./produtos-lista.css";
import { carregarDados } from "../../../../services/api";
import formatPrice from "../../../../utils/formatPrice";

type Produto = {
  id?: string | number;
  poster_img?: string;
  title?: string;
  price?: string;
};

type Props = {
  bd: string;
};

export default function ProdutosLista({ bd }: Props) {
  const [itens, setItens] = useState<Produto[]>([]);

  useEffect(() => {
    carregarDados(bd)
      .then((dados) => {
        setItens(dados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bd]);

  const produtos = itens.slice(1) as Produto[];

  return (
    <section className="produtos-lista container">
      <h1 className="produtos-lista-titulo">
        {`Nossos deliciosos ${itens[0]?.title}`}
      </h1>
      <ul>
        {produtos?.map((produto: Produto) => (
          <li key={produto?.id}>
            <img src={produto?.poster_img} alt={produto?.title ?? "produto"} />
            <h2 className="produto-item-titulo">{produto?.title}</h2>
            <p className="produto-item-preco">
              {formatPrice(Number(produto?.price) || 0)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
