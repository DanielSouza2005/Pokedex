import "./imagem.css";

const Imagem = ({ src, alt, estilo }) => {
    return(
        <img 
            src={src}
            alt={alt}
            className={estilo}
        />
    );
}

export default Imagem;