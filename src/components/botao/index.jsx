import "./botao.css";

const Botao = ({ estilo, children }) => {
    return (
        <button
            className={estilo}
        >
            {children}
        </button>
    );
}

export default Botao;