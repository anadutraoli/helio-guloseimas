import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className="header-bg">
      <div className="header container">
        <Link to="/">
          <img src={logo} alt="Logo Hélio" />
        </Link>
        <nav id="nav">
          <button id="btn-mobile">
            Menu
            <span id="hamburguer"></span>
          </button>
          <ul className="header-menu">
            <li>
              <Link
                to="/produtos"
                className="menu-produtos"
              >
                Produtos
              </Link>
            </li>
            <li className="menu-contato">
              <Link to="/contato">Faça seu pedido</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
