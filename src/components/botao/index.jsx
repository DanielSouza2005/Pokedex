import "./botao.css";

const Botao = ({ estilo, children, aoClicar }) => {

    return (
        <button
            className={estilo}
            onClick={() => aoClicar()}
        >
            {children}
        </button>
    );
}

export default Botao;