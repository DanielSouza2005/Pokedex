import "./campo.css";

const Campo = ({ type, estilo, placeholder, required }) => {
    return (
        <input
            type={type}
            className={estilo}
            placeholder={placeholder}
            required={required}
        />
    );
}

export default Campo;