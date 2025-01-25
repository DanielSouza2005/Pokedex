import "./formulario.css";

const Formulario = ({ children }) => {
    return (
        <form className="form">
            {children}
        </form>
    );
}

export default Formulario;