import { Swiper, SwiperSlide } from "swiper/react";
import "./avaliacoes.css";
import { useEffect, useState } from "react";
import { carregarDados } from "../../../../services/api";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import type { IndexAvaliacoesProps } from "../../type";

export default function Avaliacoes() {
  const [avaliacoes, setAvaliacoes] = useState<IndexAvaliacoesProps[]>([]);

  useEffect(() => {
    carregarDados("avaliacoes")
      .then((dados) => {
        setAvaliacoes(dados);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <article className="avaliacoes-bg">
        <div className="avaliacoes container">
          <h1>O que os clientes estão achando?</h1>
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            loop={true}
            modules={[Autoplay]}
          >
            {avaliacoes.map((avaliacao) => (
              <SwiperSlide key={avaliacao.id}>
                <div className="content-avaliacoes">
                  <h2>{avaliacao.nome}</h2>
                  <p>{avaliacao.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </article>
    </>
  );
}
