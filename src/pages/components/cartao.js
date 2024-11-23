export function Cartao(props) {
  return (
    <div className="cartao">
      <h3>{props.titulo}</h3>
      <p>{props.conteudo}</p>
      <button onClick={props.onClickBotao}>{props.botaoTexto}</button>
    </div>
  );
}
