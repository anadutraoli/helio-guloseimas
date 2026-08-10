import { Link } from "react-router-dom";
import "./footer.css"
import logoBranco from "../../assets/logo-branco.svg"

export default function Footer() {
  return (
    <>
      <footer className="footer-bg">
        <div className="footer-conteudo">
          <Link to="/">
            <img src={logoBranco} alt="" />
          </Link>
          <p>Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
