import "./botoes.css";

const Botoes = ({ children }) => {
    return (
        <div className="buttons">
            {children}
        </div>
    );
}

export default Botoes;