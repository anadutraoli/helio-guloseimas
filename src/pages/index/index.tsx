import Introducao from "./components/introducao/introducao";
import ProdutosLista from "./components/produtos-lista/produtos-lista";

export default function Index() {
  return (
    <>
      <Introducao />
      <ProdutosLista bd={"pao-de-mel"} />
      <ProdutosLista bd={"cone-trufado"} />
      <ProdutosLista bd={"mais-vendidos"} />
    </>
  );
}
