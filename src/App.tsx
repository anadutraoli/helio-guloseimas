import { Route, Routes } from "react-router-dom";
import Index from "./pages/index";
import Produtos from "./pages/produtos/produtos";
import Contato from "./pages/contato/contato";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

export function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
