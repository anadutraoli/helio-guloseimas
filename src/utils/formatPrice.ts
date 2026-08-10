export default function formatPrice(valor: number) {
  const precoFormatado = valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return precoFormatado;
}