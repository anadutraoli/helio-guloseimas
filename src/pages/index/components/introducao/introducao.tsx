import "./introducao.css";
import coneEPaoDeMel from "../../../../assets/main.png"

export default function Introducao() {
  return (
    <main className="introducao-bg container">
      <div className="introducao">
        <div className="introducao-texto-container">
          <h1 className="introducao-titulo">
            Cone Recheado & Pão de Mel Caseiro
          </h1>
          <p className="introducao-paragrafo">
            Explore sabores autênticos na nossa loja artesanal, onde os pães de
            mel macios e os cones trufados irresistíveis são as estrelas. Feitos
            com ingredientes de qualidade e carinho, cada mordida é uma
            experiência única. Se entregue aos prazeres doces da vida conosco!
          </p>
          <a href="./produtos.html" className="botao introducao-botao">
            saiba mais
          </a>
        </div>
        <img src={coneEPaoDeMel} alt="cone e pao de mel" />
      </div>
    </main>
  );
}
