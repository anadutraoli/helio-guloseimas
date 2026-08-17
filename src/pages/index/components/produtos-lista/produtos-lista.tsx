import { useEffect, useState } from "react";
import "./produtos-lista.css";
import { carregarDados } from "../../../../services/api";
import formatPrice from "../../../../utils/formatPrice";
import type { IndexProdutoListaProps, IndexProdutoProps } from "../../type";



export default function ProdutosLista({ bd }: IndexProdutoProps) {
  const [itens, setItens] = useState<IndexProdutoListaProps[]>([]);

  useEffect(() => {
    carregarDados(bd)
      .then((dados) => {
        setItens(dados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [bd]);

  const produtos = itens.slice(1) as IndexProdutoListaProps[];

  return (
    <section className="produtos-lista container">
      <h1 className="produtos-lista-titulo">
        {`Nossos deliciosos ${itens[0]?.title}`}
      </h1>
      <ul>
        {produtos?.map((produto: IndexProdutoListaProps) => (
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
