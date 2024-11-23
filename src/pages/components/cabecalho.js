export function Cabecalho(props) {
  return (
    <header className="cabecalho">
      <h1>{props.nome}</h1>
      <h2>{props.subtitulo}</h2>
      <p>{props.descricao}</p>
    </header>
  );
}
