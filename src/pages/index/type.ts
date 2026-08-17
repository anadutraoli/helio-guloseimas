export interface IndexProdutoListaProps {
  id?: string | number;
  poster_img?: string;
  title?: string;
  price?: string;
}

export interface IndexProdutoProps {
  bd: string;
}

export interface IndexAvaliacoesProps {
  id: number;
  nome: string;
  text: string;
}
