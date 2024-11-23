export function Titulo(props) {
    return (
        <div>
            <h1 className="titulo">{props.nome}</h1>
            <h2 className="titulo">{props.subnome}</h2>
        </div>
    );
}
