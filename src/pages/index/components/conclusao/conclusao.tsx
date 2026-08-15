import "./conclusao.css"
import main from "../../../../assets/main.png"
import { Link } from "react-router-dom";

export default function Conclusao() {
  return (
    <>
      <section className="conclusao container">
        <div className="conclusao-texto">
          <h1>
            Cone Recheado & Pão de Mel Caseiro
          </h1>
          <p>
            Venha experimentar as deliciosas guloseimas do Hélio! Aqui temos pão
            de mel com três opções de sabores e cones recheados com sabores nada
            tradicionais.
          </p>
          <Link to={"/contato"} className="botao">faça seu pedido</Link>
        </div>
        <img src={main} alt="cone e pao de mel" />
      </section>
    </>
  );
}
