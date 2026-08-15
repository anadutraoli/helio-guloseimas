import Avaliacoes from "./components/avaliacoes/avaliacoes";
import Conclusao from "./components/conclusao/conclusao";
import Introducao from "./components/introducao/introducao";
import ProdutosLista from "./components/produtos-lista/produtos-lista";

export default function Index() {
  return (
    <>
      <Introducao />
      <ProdutosLista bd={"pao-de-mel"} />
      <ProdutosLista bd={"cone-trufado"} />
      <ProdutosLista bd={"mais-vendidos"} />
      <Avaliacoes />
      <Conclusao />
    </>
  );
}
